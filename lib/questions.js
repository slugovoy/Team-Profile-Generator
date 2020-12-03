// Questions for employees
const questions = [
    {
      name: "name",
      message: "Enter the employee's name: ",
    },
    {
      name: "id",
      message: "Enter the employee's id: ",
    },
    {
      name: "email",
      message: "Enter the employee's email: ",
    },
    {
      name: "employeeType",
      message: "What type of employee do you want to add: ",
      type: "list",
      choices: ["Engineer", "Intern"],
    },  
    {
      name: "github",
      message: "What is engineer's github username:",
      when: (answers) => answers.employeeType === "Engineer",
    },
    {
      name: "school",
      message: "What is intern's school name:",
      when: (answers) => answers.employeeType === "Intern",
    },
    {
        name: "again",
        message: "Do you want to add more employees?",
        type: "confirm",
        default: "true"
    }
  ];
  
  module.exports = questions;