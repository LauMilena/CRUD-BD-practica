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

    editMovie: async function (body, id){
        try{
            //console.log(id);
            //console.log(body);
        let editedMovie = new Pelicula (body);
        //console.log(Pelicula(body));
        await db.Peliculas.update(editedMovie,{where: {id:id}});
    }
    catch (error){
        console.log(error);
        return ('no se pudo actualizar')
    }

},
    destroyMovie: async function(id){
        await db.ActorMovies.destroy({
            where:{movie_id:id},
    });

        await db.Peliculas.destroy({
            where:{id:movie_id}
        })
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
