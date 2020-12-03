// Variables from external files
const Engineer = require("./Engineer");
const Intern = require("./Intern");
// Function to create employees classes with user input
const createEmployee = ({
  name,
  id,
  email,
  employeeType,
  github,
  school,
  again,
}) => {
  // Variable to keep data
  let employee = {};
// statements for creating employees classes with user input
  if (employeeType === "Engineer") {
    employee = new Engineer(name, id, email, github);
  }
  if (employeeType === "Intern") {
    employee = new Intern(name, id, email, school);
  }

  return employee;
};
// Export file
module.exports = createEmployee;
