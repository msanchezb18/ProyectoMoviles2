
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Pista = mongoose.model('Pistas');

// Retrieves all registered articles
router.get('/', function (req, res) {
    Pista.find({}, [])
        .then(pistas => {
            let salida;
            if (pistas.length === 0) {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: {'Pistas': 'List is empty'}
                };
            } else {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: pistas
                };
            }
            res.set('Content-Type', 'application/json').status(200).send(salida);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});


// Retrieve only one article by id
router.get('/:id', function (req, res) {
    Pista.findById(req.params.id, [])
        .then(pistas => {
            let salida;
            if (!pistas) {
                salida = {
                    status_code: 404,
                    status_message: 'Not Found',
                    data: {'message': 'Player not found'}
                };
            } else {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: pistas
                };
            }
            res.set('Content-Type', 'application/json').status(salida.status_code).send(salida);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});


// Insert article without comments
router.post('/', function(req, res, next) {
    var newPista = req.body;
    var pist = new Pista({
      Descripcion: newPista.Descripcion, 
      Identificador: newPista.Identificador 
    });
  
    pist.save().then(() => {
      let salida = {
        status_code: 201,
        status_message: 'Pista was created',
        data: pist
      };
      res.set('Content-Type', 'application/json').status(201).send(salida);
    }).catch(next);
  });
  
// Update one article by id, without comments
router.put('/:id', function(req, res) {
    Pista.updateOne({_id:req.params.id},
        {$set:{Color:req.body.Color,
                     Weight:req.body.Weight}})
        .then(result => {
            if (result.nModified === 0) {
                throw new Error('Player not found');
            }
            salida = {
                status_code:200,
                status_message: 'Ok',
                data: 'Pista updated'
            };
            res.set('Content-Type', 'application/json').status(200).send(salida);
        })
        .catch(err => {
            console.error(err);
            if (err.message === 'Player not found') {
                res.status(404).send('Player not found');
            } else {
                res.status(500).send('Internal Server Error');
            }
        });
});


// Delete one article by id
router.delete('/:id', function(req, res) {
    Pista.deleteOne({_id:req.params.id})
        .then(result => {
            if (result.nModified === 0) {
                throw new Error('Player not found');
            }
            salida = {
                status_code:200,
                status_message: 'Ok',
                data: 'Pista deleted'
            };
            res.set('Content-Type', 'application/json').status(200).send(salida);
        })
        .catch(err => {
            console.error(err);
            if (err.message === 'Player not found') {
                res.status(404).send('Player not found');
            } else {
                res.status(500).send('Internal Server Error');
            }
        });
});

module.exports = router;
