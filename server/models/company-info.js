const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyInfo = new Schema({
    company_location: {
        type: String,
        required: true
    },
    Business_scope = {
        type: String,
        required: true
    },
    establishment_year = {
        type: Number,
        required: true
    },
    company_contacts = {
        tel: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        web_site: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('companyInfo', companyInfo)