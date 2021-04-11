// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `[![apacheLicense2.0](https://img.shields.io/badge/license-apache--2.0-green?style=plastic)]`
  }
  else if (license === "MIT License") {
    return `[![mitLicense](https://img.shields.io/badge/license-MIT-green?style=plastic)]`
  }
  else if (license === "GNU General Public License v3.0") {
    return `[![GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green?style=plastic)]`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license === "MIT License") {
    return `(https://choosealicense.com/licenses/bsd-3-clause/)`
  }
  else if (license === "GNU General Public License v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
  else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description

  ${data.description}
  
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Links

  * Application URL: (https://${data.username}.github.io/${data.repository}/)
  * Github Repository URL: (https://github.com/${data.username}/${data.repository})
  
${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
## Contributions

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/${data.username})

  Reach out to me at ${data.email} with any questions about the project.
`;
}

module.exports = generateMarkdown;
