const Manager = require("./Manager");

const createManager = ({
    name, id, email, officeNumber
}) => {
     return new Manager(name, id, email, officeNumber)
}

module.exports = createManager;