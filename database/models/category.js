module.exports = function(sequelize, dataTypes){
    let alias = "categories"
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
    };

    let config = {
        tableName: "categories",
        timestamps: false
    }

    const categoria = sequelize.define(alias, cols, config);

    return categoria
}