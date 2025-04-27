var mongoose = require('mongoose');

var schPista= new mongoose.Schema({
    Descripcion : {type: String, required:[true, 'This field is required']},
    
    Identificador: {type: Number, required:[true, 'This field is required']},


});


mongoose.model('Pistas', schPista);