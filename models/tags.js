const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
    tag: String,
});

const tagsModel = mongoose.model('Tags',tagsSchema);

module.exports = tagsModel;