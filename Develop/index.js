import fs from 'fs';
import inquirer from 'inquirer';

const LicenseBadge = (license) => {
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0](https://img.shields.io/badge/License-CC0%201.0%20Universal-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    default:
      return '';
  }
};

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the testing instructions?',
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'BSD 3-Clause License',
      'Creative Commons Zero v1.0 Universal',
    ],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = `
# ${answers.title}
# ${LicenseBadge(answers.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Testing
${answers.test}

## License
This project is licensed under the ${answers.license}.

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
`;
      fs.writeFile('README.md', readmeContent.trim(), (err) =>
        err ? console.error(err) : console.log('README.md created!')
      );
    })
    .catch((error) => {
      console.error("Error initializing the app:", error);
    });
}

init();