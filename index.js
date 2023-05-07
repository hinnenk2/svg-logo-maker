//Imports the graceful fs for WriteToFile and WriteFile functions and inquirer for question prompts.
const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");  //imports modules for the selected shapes: square, triangle. circle

// Defines an Svg class with a constructor containing methods for rendering and positioning the text, and setting the shape elements.
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="120" font-size="75" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

// Defines a question array via inquirer
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter your logo's text of no more than 3 characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter your text Color keyword or a hexadecimal number for the logo's text color",
    },
    {
        type: "input",
        name: "shape",
        message: "Please enter a Color keyword or a hexadecimal number for the logo's background color:",
    },
    {
        type: "list",
        name: "shape-image",
        message: "Please choose your logo's shape",
        choices: ["Triangle", "Square", "Circle"],
    },
];

function writeToFile(fileName, data) {
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("You have successfully generated an svg logo!");
    });
}

async function init() {
	var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions); //questions prompts user for answers

	// Triggers if too many characters are entered.
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		user_text = answers.text;
	} else {
		console.log("Too many characters entered, please enter up to three characters.");
        return;
	}

	user_font_color = answers["text-color"]; //user's entered font color
	
	user_shape_color = answers.shape; // user's entered shape color
	
	user_shape_type = answers["shape-image"]; //user's entered choice of shape

	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
	}
	else {
		console.log("Please choose a valid shape...");
	}

	user_shape.setColor(user_shape_color);

	// Generates a new svg logo by applying the user-selected features
	var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	writeToFile(svg_file, svgString); 
}

init()