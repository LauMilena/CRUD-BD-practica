const db = require ('../database/models')
const { Sequelize, Op } = require('sequelize');

let peliculasService = {
createNew: async function (body){
        try{
                let createdMovie = await db.Peliculas.create({
                title:body.title,
                rating:body.rating,
                awards:body.awards,
                release_date:body.release_date,
                length:body.length,
                genre_id:body.genre_id
            })
                return createdMovie.dataValues
            }
                catch(error){
                console.log(error)
            }
    }, 

    getOneMovie: async function (id){
        try{
            await db.Peliculas.findByPk(id)
        }
        catch (error){
            console.log(error);
            return {
                id:0,
                title:'No encontrado',
                rating: 0,
                awards: 0,
                release_date: ""
            }
        }
    },


    editMovie: async function (id,body){
        try{
        let editedMovie = new Pelicula (body)
        return db.Peliculas.update(editedMovie,{
            where: {id:id}
        })
    }
    catch (err){
        console.log(error);
        return ('no se pudo actualizar')
    }

}
}

function Pelicula({title, rating, awards, release_date, length, genre_id}){
    this.title = title;
    this.rating = rating;
    this.awards = awards;
    this.release_date = release_date;
    this.length = length;
    this.genre_id = genre_id;
}

module.exports  = peliculasService;
