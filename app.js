
const yargs = require("yargs");
const todo = require("./utils");

//activities
//1.create new to-do
yargs.command({
  command: "/add",
  describe: "Add new to-do to the list",
  builder: {
    title: {
      describe: "To-do title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "To-do content",
      type: "string",
      demandOption: true,
    },
  },

  handler(argv) {
    todo.addTODO(argv.title, argv.body);
  },
});

//2.delete to-do
yargs.command({
  command: "/delete",
  describe: "delete a to-do from the list",
  builder: {
    title: {
      describe: "To-do title",
      type: "string",
      demandOption: true,
    },
  },

  handler(argv) {
    todo.deleteTODO(argv.title);
  },
});
//3.update to-do
yargs.command({
  command: "/update",
  describe: "Add new to-do to the list",
  builder: {
    title: {
      describe: "To-do title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "To-do content",
      type: "string",
      demandOption: true,
    },
  },

  handler(argv) {
    todo.updateTODO(argv.title, argv.body);
  },
});

//4.show all to-do
yargs.command({
  command: "/show",
  describe: "Add new to-do to the list",

  handler() {
    todo.showAllTODO();
  },
});
//5.get specific to-do body by title
yargs.command({
  command: "/get",
  describe: "Add new to-do to the list",
  builder: {
    title: {
      describe: "To-do title",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    todo.getTODO(argv.title);
  },
});

yargs.parse();
