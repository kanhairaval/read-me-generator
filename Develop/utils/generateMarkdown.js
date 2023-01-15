// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    isc: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    gpl: "![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)",
    gnu: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    none: "![Generic badge](https://img.shields.io/badge/No-License-<COLOR>.svg)"
  }

  if (license === "isc") {
    return badges.isc
  } else if (license === "gpl") {
    return badges.gpl
  } else if (license === "mit") {
    return badges.mit
  } else if (license === "gnu gpl v3") {
    return badges.gnu
  } else {
    return badges.none
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: "https://opensource.org/licenses/MIT",
    isc: "https://opensource.org/licenses/ISC",
    gpl: "http://perso.crans.org/besson/LICENSE.html",
    gnu: "https://www.gnu.org/licenses/gpl-3.0"
  }

  if (license === "isc") {
    return licenseLink.isc
  } else if (license === "gpl") {
    return licenseLink.gpl
  } else if (license === "mit") {
    return licenseLink.mit
  } else if (license === "gnu gpl v3") {
    return licenseLink.gnu
  } else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseSection = {
    mit: "MIT",
    isc: "ISC",
    gpl: "GPL",
    gnu: "GNU GPL V3",
    none: "none"
  }

  if (license === "isc") {
    return `This project is licensed under ` + licenseSection.isc + `.`
  } else if (license === "gpl") {
    return `This project is licensed under ` + licenseSection.gpl + `.`
  } else if (license === "mit") {
    return `This project is licensed under ` + licenseSection.mit + `.`
  } else if (license === "gnu gpl v3") {
    return `This project is licensed under ` + licenseSection.gnu + `.`
  } else {
    return "No license has been selected.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Table of Content
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Testing](#Testing)
  - [License](#License)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}

  ## Questions
  ${data.username}\n
  ${data.email}
`;
}

module.exports = generateMarkdown;