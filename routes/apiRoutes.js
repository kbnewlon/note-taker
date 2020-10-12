//Dependencies
//==============================
const db = require("../db/db.json");
const fs = require ("fs");

function apiRoutes(app){
    //GET `/api/notes` - Read the `db.json` file and return all saved notes as JSON
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });
    //Get '/api/notes/:id' - Displays the note
    app.get("/api/notes/:id", function(req, res){
        res.json(data[Number(req.params.id)]);
    });

   //POST `/api/notes` - Receives a new note to save on the request body, add it to 
   //the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", function(req,res){
        const newNote = req.body;
        let noteId = newNote.title + " " + (Math.floor(Math.random()*10));
        newNote.id = noteId;
        db.push(newNote);
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err){
            res.json(db);
            console.log("Note Added");
        });
    });

    //DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. 
    app.delete("/api/notes/:id", function(req,res){
        const deleteNote = req.params.id;
        db.pop(deleteNote);
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err){
            res.send("Note Deleted");
            console.log("Note Deleted");
        });

    })};


module.exports = apiRoutes;