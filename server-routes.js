var express = require("express");
var inMemoryDatabase = require("./in-memory-database");
var tasks = require("./tasks.js")
var router = express.Router();

var tasksDb = inMemoryDatabase();
tasksDb.init([
    {}
]);

router.get("/tasks", function(req, res) {
  res.send("Tasks");
});

router.post("/tasks", function(req, res) {
  var tasks = req.body;
  tasksDb.create(tasks);
  res.status(201).send(tasks);
});

router.delete("/tasks", function(req, res) {
  var id = req.params.id;
  tasksDb.delete(id);
  res.send("Deleted");
})

router.put("/tasks", function(req, res) {
  var id = req.params.id;
  tasksDb.delete(id);
  res.send("Deleted");
})



module.exports = router;
