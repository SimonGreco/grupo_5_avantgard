module.exports = function(sequelize, dataTypes){
    let alias = "users"
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        first_name:{
            type : dataTypes.STRING,

        },
        last_name:{
            type : dataTypes.STRING,

        },
        email: {
            type : dataTypes.STRING,
            unique: true
        },
        password: {
            type : dataTypes.STRING,

        },
        admin: {
            type : dataTypes.BOOLEAN,

        },
        image: {
            type : dataTypes.STRING,

        },
        documento: {
            type : dataTypes.INTEGER,

        },
        phone: {
            type : dataTypes.INTEGER,

        },
        addres: {
            type : dataTypes.STRING,

        },
        ciudad_id: {
            type : dataTypes.INTEGER,
             primaryKey: true,

        },
    };

    let config = {
        tableName: "users",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config);
    
    user.associate = function(models){
        user.belongsTo(models.cities, {
            as: "ciudad",
            foreingKey : "ciudad_id",

        
            
        })
        user.hasMany(models.products, {
            as: "product",
            foreingKey : "usuario_id",
           
            
        })
    }
    return user
}