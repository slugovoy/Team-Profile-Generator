// Variables from external files
const questions = require("./lib/questions");
const managerQuestions = require("./lib/managerQuestions");
const createEmployee = require("./lib/createEmployee");
const render = require("./lib/htmlRenderer");
const createManager = require("./lib/createManager");

// Packages
const { prompt } = require("inquirer");
const { writeFile } = require("fs/promises");
const path = require("path");

// Variables for path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array to keep data
const data = [];

// Async function to get manager data
const manager = async () => {
  try {
    //   Variables for manager
    const managerResponse = await prompt(managerQuestions);
    const manager = createManager(managerResponse);
    // Push manager data to array
    data.push(manager);
    // Call employees function to proceed to next question
    employees();
  } catch (err) {
    console.log(err);
  }
};
manager();

// Async function to get employees data
const employees = async () => {
  try {
    const response = await prompt(questions);

    const employee = createEmployee(response);
    data.push(employee);
    // Recursive call
    if (response.again) {
      employees();
    } 
    // Write html file with all data
    else {
      const template = render(data);
      
      await writeFile(outputPath, template, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
  } catch (err) {
    console.log(err);
  }
};


