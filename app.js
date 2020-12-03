const questions = require("./lib/questions");
const managerQuestions = require("./lib/managerQuestions");
const createEmployee = require("./lib/createEmployee");

const { prompt } = require("inquirer");
const { writeFile } = require("fs/promises");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const createManager = require("./lib/createManager");

const data = [];
const manager = async () => {
  try {
    const managerResponse = await prompt(managerQuestions);
    const manager = createManager(managerResponse);
    data.push(manager);
    employees();
  } catch (err) {
    console.log(err);
  }
};

const employees = async () => {
  try {
    const response = await prompt(questions);

    const employee = createEmployee(response);
    data.push(employee);

    if (response.again) {
      employees();
    } else {
      const template = render(data);
      await writeFile(outputPath, template, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
  } catch (err) {
    console.log(err);
  }
};
manager();

