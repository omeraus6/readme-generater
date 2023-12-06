// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ["Apache","Academic","GNU","ISC","MIT","Mozilla","Open"];

//check if licence come from user input include from licenseArr
function renderLicenseBadge(license) {
  var found =0 ;
  for (let i=0 ;i<licenseArr.length;i++)
  {
    if(license == licenseArr[i])
    {
      found = 1;
      return `${renderLicenseLink(license)} \n ${renderLicenseSection(license)}`
    }
      
  }

  if(found == 0)
  {
    return `license name :  ${license} is not found on license record data\n `;
  }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![ ${license} license](https://img.shields.io/badge/License-${license}-blue.svg)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered by the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}


## Table of Contents (Optional)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  

## Installation

${data.installation}


## Usage

${data.usage}


## Credits

${data.contributing}


## License

${renderLicenseBadge(data.license)}


## Questions

${data.questions}

Github account : [${data.username}](https://github.com/${data.username})

E-mail : ${data.email}


## Tests

${data.tests}
  
`;
}

module.exports = {generateMarkdown};

