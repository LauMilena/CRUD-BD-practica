module.exports = function (sequelize,DataTypes){
    let alias='Actores';

    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        favorite_movie_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }

    let config={
        tableName: "actors",
        timestamps:false
    }

    const Actores = sequelize.define(alias, cols, config);

    return Actores;
}

