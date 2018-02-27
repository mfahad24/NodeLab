var tasks = [
  {task: "flying"},
   {task: "running"},
    {task: "baking"},
    {task: "exercising"},
     {task: "sleeping"}
   ];

var randomTask = tasks[Math.floor(tasks.length * Math.random())];
//math.floor rounds down
//math.random produces a number from 0 - 1
// console.log(randomTask);
module.exports = randomTask;

//module.exports - In order to expose a variable or function from a node module you must add it to the module.exports object
