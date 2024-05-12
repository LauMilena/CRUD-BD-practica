module.exports = function (sequelize,DataTypes){
    let alias='ActorMovie';

    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        actor_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        movie_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }

    let config={
        tableName: "actor_movie",
        timestamps:false
    }

    const ActorMovie = sequelize.define(alias, cols, config);
    ActorMovie.associate = function(models){
    ActorMovie.belongsTo(models.Peliculas,{
        as:"pelicula",
        foreignKey:"movie_id"
    })
    ActorMovie.belongsTo(models.Actores,{
        as:"actor",
        foreignKey:"actor_id"
    })
    
    }
    return ActorMovie;
}

