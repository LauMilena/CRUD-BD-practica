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
        db.Peliculas.findByPk(req.params.id)
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
        db.Peliculas.findAll()
            .then (function (movies){
                res.render ('moviesAdd',{movies})
            } )

        },

    create: async function (req,res){
        let newMovie = await peliculasService.createNew(req.body)
        res.redirect('/movies/detail/' + newMovie.id)
    },

    edit: async function (req,res){
        try{
            let Movie = await peliculasService.getOneMovie(req.params.id)
            res.render ('moviesEdit',{ Movie : Movie })
            console.log(Movie);
        }
        catch (error){
            res.send ('Pelicula no recuperada')
        } 
        

    },

    update: async function (req,res){
            try{
                let updatedMovie = await peliculasService.editMovie(req.body, req.params.id)
                return res.redirect ('/movies/detail/'+ updatedMovie.id, {Movie})
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
    }
}


module.exports = moviesController;