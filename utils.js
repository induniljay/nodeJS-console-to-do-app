"use-strict";
const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

// add new to-do
const addTODO = (title, body) => {
  const allTODO = loadTODO();

  const existsTODO = allTODO.filter((todo) => todo.title === title);

  if (!existsTODO.length) {
    allTODO.push({
      title: title,
      body: body,
    });
    saveTODO(allTODO);
    console.log(chalk.green.inverse(`New to-do added successfully`));
  } else {
    console.log(
      chalk.red.inverse(
        `"${title}" already in the list. please change your title`
      )
    );
  }
};

//delete a existing to-do
const deleteTODO = (title) => {
  const allTODO = loadTODO();
  const keepTODO = allTODO.filter((todo) => todo.title !== title);

  if (allTODO > keepTODO) {
    console.log(chalk.greenBright.inverse(`To-Do removed successfully`));
    saveTODO(keepTODO);
  } else {
    console.log(chalk.bgBlueBright(`No such kind of to-do in the list.`));
  }
};

// Show all existing to-do
const showAllTODO = () => {
  const allTODO = loadTODO();

  if (addTODO.length) {
    console.log(chalk.bgBlue.italic("--------------TO-DO-------------"));
    console.log(
      chalk.bgGreenBright("Title       |") +
        "   " +
        chalk.bgGreenBright("Body          ")
    );
    allTODO.forEach((todo) => {
      console.log(
        chalk.blue(todo.title) + "               " + chalk.blue(todo.body)
      );
    });
  }
  else{
    console.log(chalk.red.inverse.italic('TO-DO list is Empty'));
  }
};

//get a todo body by giving title
const getTODO =(title)=>{
    const allTODO = loadTODO();
    const get = allTODO.filter(todo=>todo.title===title)

    if(get.length){
          const [todo] = getTODO;
        console.log(chalk.green(`TO-DO title "${todo.title}" body is "${todo.body}"`));
    }
    else{
        console.log(chalk.bgRed(`There is no TO-DO that given title "${title}"`));
    }
}

//update to-do
const updateTODO = (title,body)=>{
   const allTODO= loadTODO();
   const getTODO = allTODO.filter((todo) => todo.title === title);
   if (getTODO.length) {
      const [todo] = getTODO;
      todo.body = body
      saveTODO(allTODO);
      console.log('update done');
    
   } else {
     console.log(chalk.bgRed(`There is no such TO-DO that given title "${title}"`));
     console.log(chalk.bgRed(`can't update TO-DO body of title "${title}"`));
   }
}

const loadTODO = () => {
  try {
    const dataBuffer = fs.readFileSync("todo-data.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveTODO = (todo) => {
  const dataJSON = JSON.stringify(todo);
  fs.writeFileSync("todo-data.json", dataJSON);
};

module.exports = {
  addTODO,
  deleteTODO,
  showAllTODO,
  getTODO,
  updateTODO
};
