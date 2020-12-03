// const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const createEmployee = ({
  name,
  id,
  email,
  employeeType,
  github,
  school,
  again,
}) => {
  let employee = {};

  if (employeeType === "Engineer") {
    employee = new Engineer(name, id, email, github);
  }
  if (employeeType === "Intern") {
    employee = new Intern(name, id, email, school);
  }

  return employee;
};

module.exports = createEmployee;
