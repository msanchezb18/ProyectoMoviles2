var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Player = mongoose.model('Players');

// Retrieves all registered articles
router.get('/', function (req, res) {
    Player.find({}, [])
        .then(players => {
            let salida;
            if (players.length === 0) {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: {'players': 'List is empty'}
                };
            } else {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: players
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
    Player.findById(req.params.id, [])
        .then(player => {
            let salida;
            if (!player) {
                salida = {
                    status_code: 404,
                    status_message: 'Not Found',
                    data: {'message': 'Player not found'}
                };
            } else {
                salida = {
                    status_code: 200,
                    status_message: 'Ok',
                    data: player
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
    var newPlayer = req.body;
    var play = new Player();

    play.Name = newPlayer.Name;
    play.Points = newPlayer.Points;

    play.save().then(()=>{
        salida = {
            status_code:201,
            status_message: 'Player was created',
            data: play
        };
        res.set('Content-Type', 'application/json').status(201).send(salida);
    }).catch(next);
});

// Update one article by id, without comments
router.put('/:id', function(req, res) {
    Player.updateOne({_id:req.params.id},
        {$set:{Name:req.body.Name,
                     Points:req.body.Points}})
        .then(result => {
            if (result.nModified === 0) {
                throw new Error('Player not found');
            }
            salida = {
                status_code:200,
                status_message: 'Ok',
                data: 'Player updated'
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
    Player.deleteOne({_id:req.params.id})
        .then(result => {
            if (result.nModified === 0) {
                throw new Error('Player not found');
            }
            salida = {
                status_code:200,
                status_message: 'Ok',
                data: 'Player deleted'
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
