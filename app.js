const questions = require("./lib/questions");
const createEmployee = require("./lib/createEmployee");

const { prompt } = require("inquirer");
const { writeFile } = require("fs/promises");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const data = [];

const init = async () => {
  try {
    const response = await prompt(questions);

    const employee = createEmployee(response);
    data.push(employee);

    if (response.again) { 
      init();

    } else {
      const template =  render(data);
      await writeFile(outputPath, template, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }
  } catch (err) {
    console.log(err);
  }
};
init();
