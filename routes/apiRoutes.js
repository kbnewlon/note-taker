//Dependencies
//==============================
const fs = require ("fs");
const db = require("../db/db.json");

function apiRoutes(app){
    //GET `/api/notes` - Read the `db.json` file and return all saved notes as JSON
    app.get("/api/notes", function(req, res) {
        res.join(db);
    });
    //Get '/api/notes/:id' - Displays the note
    app.get("/api/notes/:id", function(req,res){
        res,join(data[Number(req.params.id)]
    )});

   //POST `/api/notes` - Receives a new note to save on the request body, add it to 
   //the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        let noteId = newNote.title + " " + (Math.floor(Math.random()*10));
        newNote.id = noteId;
        db.push(newNote);
        fs.writeFile("../db/db.js", JSON.stringify(db), function(err){
            res.join(db);
        });
    });

    //DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. 
    app.delete("/api/notes/:id", function(req,res){
        let deleteNote = req.params.id;
        db.pop(deleteNote);(
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err){
            res.send("Note Deleted");
        }));

    })};


module.exports = apiRoutes;