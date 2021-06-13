const profileDataArgs = process.argv.slice(2, process.argv.length)
const fs = require('fs');
const generatePage = () => {
   return `
     Your Project Title
     Description
     Table of Contents
     Installation
     Usage
     Credits
     License
     Badges
     Features
     Contributing
     Tests
    `;
}

fs.writeFile(README.md, generatePage(), err =>{
    if (err) throw err
    console.log("md created")
});