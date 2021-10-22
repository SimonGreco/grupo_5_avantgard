module.exports = function(sequelize, dataTypes){
    let alias = "products"
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name:{
            type : dataTypes.STRING,

        },
        price: {
            type : dataTypes.STRING,

        },
        estado: {
            type : dataTypes.STRING,

        },
        marca: {
            type : dataTypes.STRING,

        },
        modelo:{
            type : dataTypes.STRING,

        },
        description: {
            type : dataTypes.STRING,

        },
        image: {
            type : dataTypes.STRING,

        },
        oferta: {
            type : dataTypes.BOOLEAN,

        },
        categoria_id: {
            type : dataTypes.INTEGER,

        },
        usuario_id:{
            type : dataTypes.INTEGER,

        }

    };

    let config = {
        tableName: "products",
        timestamps: false
    }

    const categoria = sequelize.define(alias, cols, config);

    return categoria
}