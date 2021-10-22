module.exports = function(sequelize, dataTypes){
    let alias = "cities"
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
        tableName: "cities",
        timestamps: false
    }

    const categoria = sequelize.define(alias, cols, config);

    return categoria
}