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
        message: 'Where is the description of the project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What is in the Table of contents?',
        name: 'contents',
      },   
       {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage for this project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
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
        message: 'Choose a license for the application',
        choices: ['MIT License', 'GNU General Public License v3'],
        name: 'license',
      },      
      {
        type: 'input',
        message: 'Any additional questions?',
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
