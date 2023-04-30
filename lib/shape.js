const isCss3Color = require('is-css3-color');  //obtained npm package from node_modules

class Shape {
  constructor({logoName, textColor, logoColor, logoShape}) {
    this.logoShape = logoShape; //"this" refers to Shape.

    this.textInput(logoName);
    this.logoName = logoName;

    this.colorInput(textColor);
    this.textColor = textColor;

    this.colorInput(logoColor);
    this.logoColor = logoColor;
  }

//Setup error messages that corresponds to the text input

  noInput(input) {
    if (!input) throw new Error('Please enter an input');
  }

  textInput(input) {
    this.noInput(input);
    if (input.length > 3) {
      throw new Error('Input text can only be three characters long.');
    }
  }

  colorInput(input) {
    this.noInput(input);
    if (!isCss3Color(input)) {
      throw new Error('Please enter a valid color.');
    }
  }

  render() {
    throw new Error('Shapes must be applied to the render() method');
  }
}
module.exports = Shape;
