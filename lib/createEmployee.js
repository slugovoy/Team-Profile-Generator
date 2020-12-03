const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const createEmployee = ({
  name,
  id,
  email,
  employeeType,
  officeNumber,
  github,
  school,
  again,
}) => {
  let employee = {};

  if (employeeType === "Manager") {
    employee = new Manager(name, id, email, officeNumber);
  }
  if (employeeType === "Engineer") {
    employee = new Engineer(name, id, email, github);
  }
  if (employeeType === "Intern") {
    employee = new Intern(name, id, email, school);
  }

  return employee;
};

module.exports = createEmployee;
