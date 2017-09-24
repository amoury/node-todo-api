var mongoose = require('mongoose');

var Doctor = mongoose.model('Doctor', {
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    dept: {
        type: String
    },
    hospital: {
        type: String
    },
    emirate: {
        type: String
    },
    votesCount: {
        type: Number
    }
});

module.exports = { Doctor };