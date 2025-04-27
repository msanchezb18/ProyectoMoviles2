var mongoose = require('mongoose');

var schPlayer = new mongoose.Schema({
    Name : {type: String, required:[true, 'This field is required']},
    Points: {type: Number, required:[true, 'This field is required']},
});

mongoose.model('Players', schPlayer);