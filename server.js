var express = require("express")
var bodyParser = require("body-parser");
var tasksRoutes = require("./tasks-routes");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", tasksRoutes);

var server = app.listen(3000, function () { //
  var port = server.address().port;
  console.log("app's server listening at http://localhost:%s", port);
});

//changed require("./server-routes") to require("./tasks-routes")
//take out link to tasks.js
