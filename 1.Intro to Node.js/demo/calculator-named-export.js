const sum = (a, b) => a + b;

// exports.sum = (a, b) => a + b; // This is "named" export option as well; Good practice;

const multiply = function (a, b) {
    return a * b;
};

function subtract(a, b) {
    return a - b;
}

exports.sum = sum;
exports.multiply = multiply;
exports.subtract = subtract;

console.log(this)