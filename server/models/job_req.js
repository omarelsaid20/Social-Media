const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    position_name: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    required_skills: {
        type: String,
        required: true
    },
    experience_years: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    prefered_age: {
        type: String,
        required: true
    },
    job_type: {
        required: true,
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
    // creator: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Company',
    //     required: true
    //   }

});

module.exports = mongoose.model('jobRequirements', postSchema);