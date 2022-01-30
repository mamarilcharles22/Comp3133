const calculator = require('./calculator');
const x = 13;
const y = 5;
test('Add numbers using the add method', () => {
	expect(calculator.add(x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
	expect(calculator.subtract(x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
	expect(calculator.multiply(x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
	expect(calculator.divide(x, y)).toBe(2.6)
});

let calculator;
let require;
calculator = require.('./calculator');
}

function add(a, b) {
	return a + b;
}
module.exports.add = add;

function add(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function multiply(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}
function modulo(a, b) {
	return a % b;
}
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.modulo = modulo;
