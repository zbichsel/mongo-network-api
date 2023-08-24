const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
    console.log('connected');

    try {
        // Drop existing collections
        await Thought.collection.drop();
        await User.collection.drop();

        const users = [];
        for (let i = 0; i < 5; i++) {
            users.push({
                username: getRandomName(),
                // Add any other user-related properties if needed
            });
        }

        // Insert users and thoughts
        const createdUsers = await User.insertMany(users);
        const thoughts = getRandomThoughts(5);

        for (const thought of thoughts) {
            thought.userId = createdUsers[Math.floor(Math.random() * createdUsers.length)]._id;
            // Adjust other thought-related properties if needed
        }

        await Thought.insertMany(thoughts);

        console.table(createdUsers);
        console.table(thoughts);
        console.info('Seeding complete! 🌱');
    } catch (error) {
        console.error('Seeding error:', error);
    } finally {
        // Close the database connection
        connection.close();
    }
});