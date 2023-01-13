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
    type: "checkbox",
    name: "content",
    message: "What is the table of content?",
    choices: ["Description", "Installation", "Usage", "License", "Contrubutors'", "Testing", "GitHub", "Contact"]
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
    choices: ["isc", "gpl", "mit", "ncsa", "No License"]
  }, 
  {
    type: "input",
    name:"contributors",
    message: "Who are the contributors?"
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

  fileMod.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirerMod.prompt(questions)
  .then(function (data) {
    const readMeFile = "LISEZMOI.md";
    writeToFile(readMeFile, generateMarkdown({...data}));
  })
}

// Function call to initialize app
init();