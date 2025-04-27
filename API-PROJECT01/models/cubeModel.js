var mongoose = require('mongoose');

var schCube = new mongoose.Schema({
    Color : {type: String, required:[true, 'This field is required']},
    Weight: {type: Number, required:[true, 'This field is required']},
});

mongoose.model('Cubes', schCube);