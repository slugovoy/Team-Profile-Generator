// Variables from external files
const Manager = require("./Manager");
// Function to create manafer class with user input
const createManager = ({
    name, id, email, officeNumber
}) => {
     return new Manager(name, id, email, officeNumber)
}
// Export file
module.exports = createManager;