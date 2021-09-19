
 function guestMiddleware(req, res, next){
    if(req.session.userLoged == undefined){
     return res.redirect("/user/login")
    };
    next()
   }
   module.exports = guestMiddleware