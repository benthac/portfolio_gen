const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;
//console.log(profileDataArgs);

//console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('portfolio complete! check out index.html to see the output!')
});