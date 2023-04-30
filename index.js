const inquirer = require('inquirer');
const fs = require('fs');
const {generateSvg} = require('./lib/generateSvg');
const {generateShape} = require('./lib/generateShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: `Please enter your logo's text of no more than 3 letters`,
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Please enter your text Color keyword or a hexadecimal number for the logo's text color`,
    },
    {
      type: 'input',
      name: 'logoColor',
      message: `Please enter a Color keyword or a hexadecimal number for the logo's background Color`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose your logo's shape`,
      choices: ['square', 'triangle', 'circle'],
    },
  ])
  .then((data) => {
    const finalLogo = generateShape(data);
    const svgPath = './dist/logo.svg';

    fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')  //abbreviated if/else statement filters out errors
    );
  })
  .catch((err) => console.error(err));
