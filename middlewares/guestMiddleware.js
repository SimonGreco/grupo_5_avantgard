
 function guestMiddleware(req, res, next){
 if(req.session.userLoged != undefined){
  return res.redirect("/")
 };
 next()
}
module.exports = guestMiddleware