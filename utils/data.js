const usernamesies = [
    'zbichsel',
    'totalmongoose',
    'crazytrainzzz',
    'testingtesttest',
    'tigerisking',
];

const thoughtsies = [
    'I am outta my mind',
    'If I had a nickel',
    'I love Halloween',
    'Cats are the best pets',
    'I am going to eat spaghetti for dinner',
];

const reactionsies = [
    'happy',
    'sad',
    'angry',
    'exhausted',
    'nervous',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => getRandomArrItem(usernamesies);

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtsies),
            username: getRandomName(),
            reactions: [...getThoughtReactions(3)], // Change the number of reactions as needed
        });
    }
    return results;
};

const getThoughtReactions = (int) => {
    if (int === 1) {
        return [{
            reactionBody: getRandomArrItem(reactionsies),
            username: getRandomName(),
        }];
    }
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactionsies),
            username: getRandomName(),
        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThoughts };