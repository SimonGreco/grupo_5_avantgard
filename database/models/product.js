module.exports = function (sequelize, dataTypes) {
    let alias = "products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: dataTypes.STRING,

        },
        price: {
            type: dataTypes.STRING,

        },
        estado: {
            type: dataTypes.STRING,

        },
        marca: {
            type: dataTypes.STRING,

        },
        modelo: {
            type: dataTypes.STRING,

        },
        description: {
            type: dataTypes.STRING,

        },
        image: {
            type: dataTypes.STRING,

        },
        oferta: {
            type: dataTypes.BOOLEAN,

        },
        categoryId: {
            type: dataTypes.INTEGER,

        },
        userId: {
            type: dataTypes.INTEGER,

        },
        creationDate: {
            type: dataTypes.DATEONLY    
        }

    };

    let config = {
        tableName: "products",
        timestamps: false
    }

    const product = sequelize.define(alias, cols, config);

    return product
}