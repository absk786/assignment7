const fs = require('fs');
const inquirer = require('inquirer');

// prompt the user about the questions
const promptUser = () => {
  return inquirer
//   an array of objects
    .prompt([

        // start of object
        {
            // what type of question is this? input means they will input something
            type: 'input',
            // where is the response being stored? as name = bob
            name: 'name',
            // what is the question?
            message: 'What is your name (Required)',
            // this will set the validation of the message making it a required field
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your name")
                    return false;
                }
            } 
        },
        // end of object

        {
            type: 'input',
            GitHub: 'userGithub',
            Message: 'Please enter your github link',
            validate: GitHubInput => {
                if (GitHubInput) {
                    return true
                }
                else {
                    console.log("Please enter your github link")
                    return false
                }
            }
            
        },

        {
            type: 'input',
            GitHub: 'userGithub',
            Message: 'Please enter your github link',
            validate: GitHubInput => {
                if (GitHubInput) {
                    return true
                }
                else {
                    console.log("Please enter your github link")
                    return false
                }
            }
            
        },

        {
            type: 'input',
            GitHub: 'userGithub',
            Message: 'Please enter your github link',
            validate: GitHubInput => {
                if (GitHubInput) {
                    return true
                }
                else {
                    console.log("Please enter your github link")
                    return false
                }
            }
        },

        {
            type: 'input',
            GitHub: 'userGithub',
            Message: 'Please enter your github link',
            validate: GitHubInput => {
                if (GitHubInput) {
                    return true
                }
                else {
                    console.log("Please enter your github link")
                    return false
                }
            }
        },

    ])
}

let projectTitle =;
let description =;
let tableOfContents=;
let installation=;
let usage=;
let credits=;
let license=;
let badges=;
let features=;
let contributing=;
let tests=;

// this is the template of the readme
const generatePage = () => {
   return `
     Project Title: ${projectTitle};
     Description: ${description}
     Table of Contents: ${tableOfContents}
     Installation: ${installation}
     Usage: ${usage}
     Credits: ${credits}
     License: ${license}
     Badges: ${badges}
     Features: ${features}
     Contributing: ${contributing}
     Tests: ${tests}
    `;
}

// this creates the file and writes to it
fs.writeFile("README.md", generatePage(), err =>{
    if (err) throw err
    console.log("md created")
});