var express = require("express");
// var inMemoryDatabase = require("./in-memory-database");
var router = express.Router();
var pool = require("./pg-connection-pool");

// var tasksDb = inMemoryDatabase();
// tasksDb.init([
//
// ]);

router.get("/Todos", function (req, res) {
    pool.query("SELECT * FROM Todos").then(function (result) {
        res.send(result.rows);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
      });
});

// router.get("/tasks", function(req, res) {
//   res.send(tasksDb.readAll());
// });

router.post("/Todos", function (req, res) {
    var todo = req.body;
    var sql = "INSERT INTO Todos(task) VALUES ($1::text)";
    var values = [todo.task];
    pool.query(sql, values).then(function (result) {
        res.status(201).send("Created");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

// router.post("/tasks", function(req, res) {
//   var tasks = req.body;
//   tasksDb.create(tasks);
//   res.status(201).send(tasks);
// });

router.delete("Todos:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM Todos WHERE id=$1::int";
    pool.query(sql, [id]).then(function (result) {
        res.send("deleted");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

// router.delete("/tasks:id", function(req, res) {
//   var id = req.params.id;
//   tasksDb.delete(id);
//   res.send("Deleted");
// });

router.put("/tasks:id",function(req, res){
    var id = req.params.id;
    var task = req.body;
    tasksDb.update(id, taskId);
});
