const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/', genresController.List);
router.get('/detail/:id', genresController.detail);


module.exports = router;