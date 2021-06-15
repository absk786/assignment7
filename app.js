const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = (answers) => `

# Project Title: ${answers.projectTitle}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Name: ${answers.userName}

## [GitHub](https://github.com/absk786):${answers.userGitHub}

## Table of Contents:
* [Description](https://github.com/absk786/assignment7/blob/main/README.md#Description)
* [Installation](https://github.com/absk786/assignment7/blob/main/README.md#Installation)
* [Usage](https://github.com/absk786/assignment7/blob/main/README.md#Usage)
* [Licences](https://github.com/absk786/assignment7/blob/main/README.md#License)
* [Languages](https://github.com/absk786/assignment7/blob/main/README.md#Languages)
* [Features](https://github.com/absk786/assignment7/blob/main/README.md#Features)
* [Tests](https://github.com/absk786/assignment7/blob/main/README.md#Tests)
* [Contributors](https://github.com/absk786/assignment7/blob/main/README.md#Contributors)

-------------------------------------------------------------------------------------
### Description: 
* ${answers.description}

### Installation: 
* ${answers.installationPackages}
 
### Usage: 
* ${answers.usage}

### Languages: 
* ${answers.languages}

### License:
* ${answers.licences}

### Features: 
* ${answers.Features}

### Tests: 
* ${answers.tests}

### Contributors: 
* ${answers.contributors}

Questions
* ${answers.questions}
`;
//===================================================================================
//===================================================================================
const promptUser = () => {
    return inquirer.prompt([
//user name question
        {
            // what type of question is this? input means they will input something
            type: 'input',
            // where is the response being stored? as name = bob
            name: 'userName',
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
//GitHub question
        {
            // what type of question is this? input means they will input something
            type: 'input',
            // where is the response being stored? as name = bob
            name: 'userGitHub',
            // what is the question?
            message: 'What is your GitHub Link(Required)',
            // this will set the validation of the message making it a required field
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your github link")
                    return false;
                }
            } 
        },
//Project title question 
        {
         type: 'input',
         name: 'projectTitle',
         Message: 'Please enter your project title',
         validate: nameInput => {
         if (nameInput) {
         return true
         }
          else {
         console.log("Please enter your project title")
         return false
                }
            }
                        
        },
//troject description question
        {
            type: 'input',
            name: 'description',
            Message: 'Please enter your project description',
            validate: nameInput => {
            if (nameInput) {
            return true
            }
             else {
            console.log("Please enter your project description'")
            return false
                   }
               }
                           
        },
//Tests
        {
            type: 'input',
            name: 'tests',
            Message: 'What are some of the tests you created?',
            validate: nameInput => {
                if (nameInput) {
                return true
                }
                 else {
                console.log("Please enter the tests that you wrote")
                return false
                       }
                   }
                           
        },
//installation packages question
{
    type: 'input',
    name: 'installationPackages',
    Message: 'Please what packagaes you used',
    validate: nameInput => {
    if (nameInput) {
    return true
    }
     else {
    console.log("Please enter your project title")
    return false
           }
       }
                   
   },    
// Contributors
   {
    type: 'input',
    name: 'contributors',
    Message: 'Who are the contributors for this project',
    validate: nameInput => {
        if (nameInput) {
        return true
        }
         else {
        console.log("Pleas provide details of the contributors for this pro")
        return false
               }
           }                 
},
//Languages question
{
    type: 'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
//License Question
{
    type: 'checkbox',
    name: 'Licenses',
    message: 'What License did you build this project with? (Check all that apply)',
    choices: ['MIT', 'The Unlicense', 'Eclipse Public License 2.0', 'None']
  },
// Features Question
{
    type: 'input',
    name: 'Features',
    Message: 'Please enter the different features of this app',
    validate: nameInput => {
    if (nameInput) {
    return true
    }
     else {
    console.log("Please enter the different features of this app")
    return false
           }
       }
},
// Email address
{
    type: 'input',
    name: 'questions',
    Message: 'Please enter your email address for future questions',
    validate: nameInput => {
    if (nameInput) {
    return true
    }
     else {
    console.log("Please enter your email address")
    return false
           }
       }
},

]);
};
promptUser()
.then(function (answers) {
fs.writeFile("README.md", generatePage(answers), err =>{
if (err) throw err
console.log("md created")
})})

//   ===================================================================================
//   ===================================================================================
//  badges Question
// {
//     type: 'checkbox',
//     name: 'Badges',
//     message: 'Do you want a badge?',
//     choices: ['MIT', 'The Unlicense', 'Eclipse Public License 2.0', 'None']
        // default: false,
//   },
