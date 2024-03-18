const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: String,
    link: String,
});

const linkModel = mongoose.model('Link',linkSchema);

module.exports = linkModel;