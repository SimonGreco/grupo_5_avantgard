const fs = require("fs");
const path = require("path")
const users = {
    Filename : "../data/users.json",
    getData : function(){
        return JSON.parse(fs.readFileSync(this.Filename, "utf-8"));
    },
    allUsers : function(){ return this.getData()},
    findByPK: function(id){
        let allUsers = this.allUsers();
        let user = allUsers.find(function(usuario){
            return user.id == id
               })
               
    },
    findByField: function(Field, txt){
        let allUsers = this.allUsers()
        let user = allUsers.find(function(elemento){
            return user.Field == txt
        })
        
    },
    create: function(userData){
        let allUsers = this.allUsers();
        userData.id = Date.now()
        allUsers.push(userData)
        fs.writeFileSync(this.Filename, JSON.stringify(allUsers, null, " "))
       
    },
    delete: function(id){
        let allUsers = this.allUsers();
        finalUser = allUsers.filter(function(user){
            return user.id != id
        })
        fs.writeFileSync(this.Filename, JSON.stringify(finalUser, null, " "))
    }
}
