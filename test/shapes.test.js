const Shape = require('../lib/shape');
var testCases = [
  {
    desc: 'displays an error if input is empty',
    input: {},
    expectedErr: new Error('Input cannot be empty'),
  },
  {
    desc: 'displays an error if logo text is longer than 3 characters',
    input: { logoName: 'svg' },
    expectedErr: new Error('Logo text cannot exceed 3 characters'),
  },
  {
    desc: 'displays an error if input is not a valid css Color',
    input: { logoName: 'svg', textColor: 'notColor' },
    expectedErr: new Error(
      'Please enter a vaild css color'
    ),
  },
  {
    desc: 'displays an error if render() is called',
    input: { logoName: 'svg', textColor: 'red', bgColor: 'blue' },
    expectedErr: new Error('Generated shapes must implement a render() method'),
    shouldRender: true,
  },
];

//function for testing shape outputs, displays the associated error message if an input is invalid
describe('Shape testing', () => {
  for (let tc of testCases) {
    it(tc.desc, () => {
      if (tc.shouldRender) {
        const shape = new Shape(tc.input);
        expect(shape.render).toThrow(tc.expectedErr);
      } else if (tc.expectedErr) {
        const shape = () => new Shape(tc.input);
        expect(shape).toThrow(tc.expectedErr);
      } else {
        const shape = new Shape(tc.input);
        expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
      }
    });
  }
});
