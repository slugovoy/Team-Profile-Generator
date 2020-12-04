# Team-Profile-Generator

The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

Checkout the [team.html](./output/team.html) in this repo that was created as an example. Also, you can check out the walkthrough video <a href="https://youtu.be/3PE5C_9By3s" target="_blank">Here</a>.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)


## Installation

To generate your own Team Profile, first run `npm install` to install the following npm package dependencies as specified in the `package.json`:

* `inquirer` that will prompt you for your inputs from the command line
* `jest` that you can use to test the app

The application itself can be invoked with the following command

```
node app.js
```
## Usage

* Video

Watch demo video [Here](https://youtu.be/3PE5C_9By3s).

* GIF

![Demo](./lib/Demo.gif)

* Instructions

When you run `node app.js`, the app uses the `inquirer package` to ask you in the command line questions about manager's and employee"s information, such as GitHub username and email address, id and etc.

Then, the application will generate HTML file templates based on your responses to the inquirer prompts.

And at the end, `writeFile` is used to generate the main HTML file with content according to your answers.

Also, you can run `npm run test` to test this application.

## Technologies

This application utilizes `promises`, `async/await`, `inquirer`, `node.js`, `jest`.


## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Steps for contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.


## License


![License](https://img.shields.io/badge/License-MIT-blue)


## Questions

If you have any questions or concerns, feel free to contact me via:

GitHub: [slugovoy](https://github.com/slugovoy)

Email: serg.lugovoy.81@gmail.com