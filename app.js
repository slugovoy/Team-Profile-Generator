const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");
const { writeFile } = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const Employee = require("./lib/Employee");
const burrito = [];

const collectInputs = async (inputs = []) => {
  const { again, ...answers } = await inquirer.prompt(questions);
  const newInputs = { ...inputs, answers };
  if (answers.employeeType === "Manager") {
    let emp = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    burrito.push(emp);
  }
  if (answers.employeeType === "Engineer") {
    let emp = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    burrito.push(emp);
  }
  if (answers.employeeType === "Intern") {
    let emp = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    burrito.push(emp);
  }

  //   burrito.push(emp);
  return again ? collectInputs(newInputs) : newInputs;
};

const init = async () => {
  await collectInputs();
  console.log(burrito);
  let template = render(burrito);
  fs.writeFile(outputPath, template, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
};

init();
// async function BuildSomething(employees) {
//     // render(employees);
// }
// BuildSomething();

// });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
