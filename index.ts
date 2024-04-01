#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

let schedule = await inquirer.prompt([
  {
    name: "schedule",
    type: "input",
    message: "What kind of timetable would you like to make for?",
  },
]);
console.log(schedule);

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "What activities do you want to put on your schedule?",
    },

    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more?",
      default: "false",
    },
  ]);

  todos.push(addTask.todos);
  condition = addTask.addMore;
  console.log(todos);
}
