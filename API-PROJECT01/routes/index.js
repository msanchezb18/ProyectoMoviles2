var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  salida = {
    status_code:200,
    status_message: 'Ok',
    data:{
      title: 'Welcome to Game Cube....!',
      description: 'This is a game were you will try to balance the weight of the...'
    }
  };
  res.set('Content-Type', 'application/json').status(200).send(salida);
});

module.exports = router;
