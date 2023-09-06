const sum = (a, b) => a + b;

const multiply = function (a, b) {
    return a * b;
};

function subtract(a, b) {
    return a - b;
}

// module.exports = {  
//     sum,
//     multiply,                      //This is anonymous export, a bad practice;
//     subtract
// };



// default export;
const calculator = {
    sum,
    multiply,
    subtract
};

module.exports = calculator; 