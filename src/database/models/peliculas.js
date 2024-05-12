module.exports = function (sequelize,DataTypes){
    let alias='Peliculas';

    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER
        }, 
        genre_id:{
            type: DataTypes.INTEGER
        }
    }

    let config={
        tableName: "movies",
        timestamps:false
    }

    const Peliculas = sequelize.define(alias, cols, config);
        Peliculas.associate = function (models){

            Peliculas.belongsTo(models.Generos,{
                as:"genre",
                foreignKey:"genre_id"
            });

            Peliculas.hasMany(models.ActorMovie,{
                as:"actorMovies",
                foreignKey:"movie_id",
            });
        }
    return Peliculas;
}

