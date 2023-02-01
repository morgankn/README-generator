// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // let licenseType = license;
  // let yourLicense = '';
  // if(licenseType === 'MIT') {
  //   yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  // } else if (licenseType === 'GPLv3') {
  //   yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  // } else if (licenseType === 'Apache License 2.0') {
  //   yourLicense = `![Apache License 2.0 license](https://img.shields.io/badge/License-Apache License 2.0-blue.svg)`
  // } else {
  //   licenseType = "N/A"
  // }
  // return yourLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// if (license !== 'none') {
//   return (`![License: ${license}](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`)
// } else{
//   return '';
// }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  return `# <${data.title}>
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Tests](#tests)
  -[Questions](#questions)
  [${data.contents}]
// add links for Table of Contents
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests 
  ${data.test}

  ## Questions
  Any additional questions you can reach me at:

  Email: ${data.questions}
  Github:[@(${data.github})]`
}
// add links for github 
module.exports = generateMarkdown;


