module.exports = function (sequelize,DataTypes){
    let alias='Generos';

    let cols= {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }

    let config={
        tableName: "genres",
        timestamps:false
    }

    const Generos = sequelize.define(alias, cols, config);
    Generos.associate = function(models){
        Generos.hasMany(models.Peliculas,{
            as:"peliculas",
            foreignKey:"genre_id"
        })
    }
    return Generos;
}

