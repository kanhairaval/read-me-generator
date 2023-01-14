// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
    gpl: "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]",
    gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    none: "[![Generic badge](https://img.shields.io/badge/<No>-<License>-<COLOR>.svg)]"
  };

  if (data.license === "isc") {
    return badges.isc
  } else if (data.license === "gpl") {
    return badges.gpl
  } else if (data.license === "mit") {
    return badges.mit
  } else if (data.license === "gnu gpl v3") {
    return badges.gnu
  } else {
    return badges.none
  }
}

renderLicenseBadge(${data.license.badges});

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: "(https://opensource.org/licenses/MIT)",
    isc: "(https://opensource.org/licenses/ISC)",
    gpl: "(http://perso.crans.org/besson/LICENSE.html)",
    gnu: "(https://www.gnu.org/licenses/gpl-3.0)"
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === "none") {
    return `No license has been selected`
  } else {
    return `This project is licensed under ${data.license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  

  ## Table of Content
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Testing](#Testing)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}\n

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
