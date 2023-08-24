const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //!-- use a getter method to format the timestamp on query--!
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

//!-- getter method for timestamp format --!
reactionSchema.virtual('formattedCreatedAt').get(function () {
    return this.createdAt.toISOString();
});

module.exports = reactionSchema;