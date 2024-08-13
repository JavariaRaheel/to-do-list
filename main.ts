import { input } from '@inquirer/prompts';
import {confirm} from '@inquirer/prompts';

import chalk from "chalk";

//make arry todo list
let todoList =[];
console.log(chalk.magentaBright.bold("\n \t Welcome to our TODOLIST app\n"));

let conditions = true;
while(conditions){
    let addTask = await input(
        {
           message: chalk.redBright("Enter your New task:")
        }
 );
todoList.push(addTask);
console.log(`${addTask}`);    

let addMoreTask = await  confirm(
    {
       message: chalk.green("DO you want to add more task?"),
    }
    );
conditions = addMoreTask
}
console.log("your updated TodoList", todoList);

