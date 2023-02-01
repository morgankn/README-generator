// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Where is the description of the project? Provide the what, why and how.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'If applicable, provide a table of contents if your application is long',
        name: 'contents',
      },   
       {
        type: 'input',
        message: 'What are the steps required to install this application?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use for this project in the usage section.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'If applicable, add any contributors or how to contribute in the future.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
      },  
      {
        type: 'list',
        message: 'Choose a license for your application',
        choices: ['MIT License', 'GPLv3', 'Apache License 2.0', ],
        name: 'license',
      },      
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'questions',
      },
];

// TODO: Create a function to write README file
function writeToFile(file, data) {
  const readMe = generateMarkdown(data)
fs.writeFile(file,readMe,(err) => {
if(err)throw err
console.log('writeFile');
})

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data =>writeToFile('README.md',data));
}

// Function call to initialize app
init();
