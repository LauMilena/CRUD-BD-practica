const db = require ('../database/models')
const { Sequelize, Op } = require('sequelize');
const peliculasService = require ('../services/peliculasService')

let moviesController = {

    list: function (req, res){
        db.Peliculas.findAll()
        .then(function(peliculas){
            res.render('moviesList', {movies:peliculas})
        })
    }, 

    detail: function (req, res){
        db.Peliculas.findByPk(req.params.id,
            {
                include:[
                    {association:"genre"}
                ]}
        )
        .then (function(movie){
            res.render('moviesDetail', {movie:movie})
        })
    }, 

    new: function (req,res){
        db.Peliculas.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then (function (movies){
            res.render('newestMovies',{movies})
        })
        
    }, 

    add: function (req,res){
        Promise.all([db.Peliculas.findAll(),
            db.Generos.findAll()])
            .then (function ([movies, genres]){
                res.render ('moviesAdd',{movies:movies, genres:genres})
            } )

        },

    create: async function (req,res){
        let newMovie = await peliculasService.createNew(req.body)
        res.redirect('/movies/detail/' + newMovie.id)
    },

    edit: function (req, res){
        let pedidoMovie = db.Peliculas.findByPk(req.params.id);
        let pedidoGenre = db.Generos.findAll();

        Promise.all([pedidoMovie, pedidoGenre])
        .then(function([pelicula, genres]){
            res.render('moviesEdit', {Movie:pelicula, genres:genres})
        })
    },

    update: async function (req,res){
            try{
                //console.log(req.body);
                //console.log(req.params.id);
                await peliculasService.editMovie(req.body, req.params.id)
                return res.redirect ('/movies')
            }
            catch (error) {
                res.send ('Error al editar')
            }
    },
    

    recommended: function (req, res){
        db.Peliculas.findAll({
            order: [
                
                ['rating', 'DESC']
            ],
            limit:5
    })
            .then(function(movies){
                res.render('recommendedMovies',{movies})
            })
    },

    delete: async function (req, res) {
        db.Peliculas.findByPk(req.params.id)
        .then (function(Movie){
            res.render('moviesDelete', {Movie})
        })
    },

    destroy: async function (req,res){
        try {
            await peliculasService.destroyMovie(req.params.id)
            res.redirect('/movies')
        } catch (error) {
            res.send ('No se pudo eliminar')
        }
    }
}


module.exports = moviesController;