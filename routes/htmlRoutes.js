//Dependencies
//==============================
var path = require("path");


function htmlRoutes(app){
    //GET `/notes` - Should return the `notes.html` file
    app.get("/notes", function(req, res){
        res.sendFile(path.join(_dirname, "../public/notes.html"));
    });
    //GET `*` - Should return the `index.html` file
    app.get("*", function(req,res){
        res.sendFile(path.join(_dirname, "../public/index.html"))
    });
};


module.exports = htmlRoutes;