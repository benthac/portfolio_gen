const inquirer = require('inquirer');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'what is your name?'
//         }
//     ])
//     .then(answers => console.log(answers));

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your GitHub Username'
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('please enter your githubInput!');
                    return false;
                }
            }
        },        
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself:'
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('please enter information about yourself!');
                    return false;
                }
            }
        },        
      ]);
};


const promptProject = portfolioData => {
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }
    console.log(``);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project?'
        },
        {
            type: 'checkbox',
            name: 'link',
            message: 'enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?'
            default: false
        }
    ])
}
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// //const profileDataArgs = process.argv.slice(2, process.argv.length);

// //const [name, github] = profileDataArgs;
// //console.log(profileDataArgs);

// //console.log(generatePage(name, github));
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('portfolio complete! check out index.html to see the output!')
// });