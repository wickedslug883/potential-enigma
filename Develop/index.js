const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// User prompt
inquirer.prompt ([ 
{
    type: 'input',
    name: 'title',
    message: 'Create title for project'
},

{
    type: 'input',
    name: 'description',
    message: 'Enter description of project'
},

{
    type: 'input',
    name: 'install',
    message: 'Enter the installation instructions'
},

{
    type: 'input',
    name: 'usage',
    message: 'Describe use of project'
},

{
    type: 'input',
    name: 'contribution',
    message: 'How should someone contribute to this project?'
},

{
    type: 'input',
    name: 'test',
    message: 'Enter test instructions'
},

{
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'None']
},

{
    type: 'input',
    name: 'github',
    message: 'Enter GitHub username'
},

{
    type: 'input',
    name: 'email',
    message: 'Enter email address'
},
]).then((answers) => fs.writeFileSync('./utils/generatedREADME.md', generateMarkdown(answers)))
.then(() => console.log('README file was created!'))
.catch((e) => console.log(err));