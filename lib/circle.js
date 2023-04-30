//Code for generating a Circle based on user input.
const Shape = require('./shape');

class Circle extends Shape {  //"extends" allows the Circle element to acquire the modules from the Shape file.
  constructor(data) { // constructor creates objects within the Circle class.
    super(data); //super calls the constructor function.
  }
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}" />`;
  }
}

module.exports = Circle;
