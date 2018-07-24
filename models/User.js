const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    JoinDate: {
        type: Date,
        default: Date.now
    },
    likes:{
        type: [Schema.Types.ObjectId],
        ref: 'Recipe'
    }
});

module.exports = mongoose.model('User', UserSchema);