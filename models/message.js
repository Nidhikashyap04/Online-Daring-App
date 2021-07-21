const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    fulname: {
        type: String
    }, email: {
        type: String
    }, message: {
        type: String
    }, date: {
        type: Date,
        defalult: Date.now
    }

});

module.exports = mongoose.model('Message', messageSchema);
