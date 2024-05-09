const db = require ('../database/models/index.js')
const { Sequelize, Op } = require('sequelize');


let actorsController = {

    list: function (req, res){
        db.Actores.findAll()
        .then(function(actores){
            res.render('#', {actores:actores})
        })
    }, 

    detail: function (req, res){
        db.Actores.findByPk(req.params.id)
        .then (function(actor){
            res.render('moviesDetail', {actor:actor})
        })
    }, 

    new: function (req,res){
        db.Actores.findAll({
            order: [
                ['rating', 'DESC']
            ]
            })
        }
    }


module.exports = actorsController;