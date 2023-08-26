const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
    console.log('Connected to the database.');

    try {
        // Drop existing collections
        await Thought.collection.drop();
        await User.collection.drop();

        // Insert users
        const createdUsers = await User.insertMany(userData);

        // Map usernames to their corresponding user IDs for easy reference
        const usernameToUserId = {};
        createdUsers.forEach(user => {
            usernameToUserId[user.username] = user._id;
        });

        // Insert thoughts
        const thoughts = [];
        for (const thoughtDataItem of thoughtData) {
            const userId = usernameToUserId[thoughtDataItem.username];

            const reactions = thoughtDataItem.reactions.map(reaction => ({
                ...reaction,
                userId: usernameToUserId[reaction.username],
            }));

            thoughts.push({
                ...thoughtDataItem,
                userId,
                reactions,
            });
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
