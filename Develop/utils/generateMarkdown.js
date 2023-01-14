// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
    gpl: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]",
    gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    None: "[![Generic badge](https://img.shields.io/badge/<No>-<License>-<COLOR>.svg)]"
  };

  return badges(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${this.renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project description] (#Description)
  - [Installation] (#Installation)
  - [Usage] (#Usage)
  - [License] (#License)
  - [Contributors] (#Contributors)
  - [Testing] (#Testing)
  - [Questions] (#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installaion}

  ##Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## Questions
  ${data.username}\n
  ${data.email}
`;
}

module.exports = generateMarkdown;
