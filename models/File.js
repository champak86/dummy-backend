const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required : true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('File', FileSchema);
