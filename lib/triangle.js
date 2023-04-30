const Shape = require('./shape');

class Triangle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColor}" />`;  //sets up dimensions for the triangle shape.
  }
}

module.exports = Triangle;
