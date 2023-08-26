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
            get: createdAtDate => moment(createdAtDate).format('MMM DD YYYY [at] hh:mm a')
            //!-- use a getter method to format the timestamp on query--!
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;