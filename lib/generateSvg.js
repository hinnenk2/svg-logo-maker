const generateSvg = (shape) => {  //linking the XML workspace and setting the logo's parameters.
  return `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="300"> 
    ${shape.render()}
    <text
      x="50%"
      y="${shape.logoShape != 'triangle' ? '50%' : '50%'}"
      text-anchor="middle"
      fill="${shape.textColor}"
      font-size="2.5rem" letter-spacing="2.5" dy="0.5em">
      ${shape.logoName}
    </text>
  </svg>
  `;
};

module.exports = {generateSvg};  //makes the generateSvg accessible to other files in the root.
