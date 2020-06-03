const express = require('express');

let pintor = require('../controllers/pintoresController.js');

let router = express.Router();

router.get('/', pintor.list);

module.exports = router;

