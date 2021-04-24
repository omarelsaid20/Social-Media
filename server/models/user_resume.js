const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    positionName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    experienceYears: {
        type: Number,
        required: true
    },
    address: {
        country: {
            type: String
        },
        city: {
            type: String
        }
    }
});

module.exports = mongoose.model('userResume', resumeSchema);