const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userSchema',
        required: true
    }
})

module.exports = mongoose.model('post', postSchema);