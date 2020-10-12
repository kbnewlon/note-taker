# Note-Taker
This application can be used to write, save, and delete notes. Note-taker uses an express backend as well as it saves and retrieves note data from a JSON file.



* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Supplemental/HerokuGuide.md) for getting your app deployed on Heroku.

- - -



## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository



// //ROUTES
// //====================================

// //Basis route that sends the user first to the AJAX Page
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "notes.html"));
// });

// // Displays all notes
// app.get("/api/notes", function(req, res) {
//   return res.json(notes);
// });

// // Displays a single character, or returns false
// app.get("/api/notes/:id", function(req, res) {
//   var chosen = req.params.name;

//   console.log(chosen);



