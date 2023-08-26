const userData = [
    {
        username: 'fireflies123',
        email: 'lightinthenight@example.com',
    },
    {
        username: 'zeiss20',
        email: 'zeisslens2@example.com',
    },
    {
        username: 'halloweenie',
        email: 'goblins123@example.com',
    },
    {
        username: 'leprechaun',
        email: 'movies90@example.com',
    },
    {
        username: 'codeblack12',
        email: 'darkskies@example.com',
    },
    {
        username: 'candlelight4',
        email: 'pumpkinspicelatte@example.com',
    },
];

const thoughtData = [
    {
        thoughtText: 'Lightning bugs are pretty cool',
        username: 'fireflies123',
        reactions: [
            {
                reactionBody: 'I agree',
                username: 'leprechaun',
            },
            {
                reactionBody: 'I remember catching them as a kid',
                username: 'candlelight4',
            },
        ]
    },
    {
        thoughtText: 'Samhain is irish culture',
        username: 'halloweenie',
        reactions: [
            {
                reactionBody: 'I did not know that',
                username: 'zeiss20',
            },
            {
                reactionBody: 'I want to visit ireland!',
                username: 'codeblack12',
            },
        ]
    },
];

module.exports = { userData, thoughtData };