// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your Github username.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a Github username.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "repository",
        message: "Enter the name of your repository on Github.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the name of your Github repository.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter your email.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true; 
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the description of your project.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Explain how user would install for Installation Section. (if neccessary)"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project instructions and examples of it for Usage Section. (if neccessary)",
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license for your project.",
        choices: ["Apache License 2.0", "MIT License", "GNU General Public License v3.0", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Explain how users can contribute to your project. (if neccessary)",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests for project and explain how to test (if neccessary)",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Creating file");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("ReadMe.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
