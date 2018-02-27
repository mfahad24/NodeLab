var express = require("express")
var bodyParser = require("body-parser");
var serverRoutes = require("./server-routes");
var tasks = require("./tasks.js")
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", serverRoutes);

var server = app.listen(3000, function () { //
var port = server.address().port;
console.log("App's server listening at http://localhost:%s", port);
});
