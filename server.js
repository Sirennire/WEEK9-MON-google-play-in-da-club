var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);
//
// app.put("/api/burgers/:id", function(req, res) {
//   connection.query("UPDATE burgers SET devoured = (CASE devoured WHEN 1 THEN 0 ELSE 1 END) WHERE id = ?", [
//     req.params.id
//   ], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     } else if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
