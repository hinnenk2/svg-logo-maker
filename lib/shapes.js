//Define a Shape class that acts as a template for the shapes to extend from.
class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
// The following classes of shapes are extended from Shape and renders an SVG shape based on the preset porperties along with the user's choice of color.

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Square, Triangle}