// TODO: Include packages needed for this application
const inquirerMod = require("inquirer");
const fileMod = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  }, 
  {
    type: "input",
    name: "description",
    message: "Please, provide a brief description of the project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation insctructions?"
  }, 
  {
    type: "input",
    name: "usage",
    message: "How do I use the application?"
  }, 
  {
    type: "list",
    name: "license",
    message: "What kind of license have you used?",
    choices: ["isc", "gpl", "mit", "ncsa", "None"]
  }, 
  {
    type: "input",
    name:"contributors",
    message: "How do I contribute to this project?"
  }, 
  {
    type: "input",
    name: "testing",
    message: "Any testing required?"
  }, 
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username link?"
  }, 
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fileMod.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirerMod.prompt(questions)
  .then(function (data) {
    const lisezMoi = "./README.md";
    writeToFile(lisezMoi, generateMarkdown(data));
  })
}

// Function call to initialize app
init();