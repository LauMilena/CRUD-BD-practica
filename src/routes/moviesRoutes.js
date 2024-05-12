const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

/* -- Listado --*/
router.get('/', moviesController.list);

/*-- Estrenos-- */
router.get('/new', moviesController.new);

/* --Detalle --*/
router.get('/detail/:id', moviesController.detail);

// /* --Creacion --*/
router.get('/add', moviesController.add);
router.post('/', moviesController.create);

// /*-- Edicion --*/
router.get('/edit/:id', moviesController.edit);
router.put('/update/:id', moviesController.update);

/* -- Recomendados --*/
router.get('/recommended', moviesController.recommended);

// /* -- Borrado --*/
router.get('/delete/:id', moviesController.delete);
router.delete('/:id', moviesController.destroy);

module.exports = router;