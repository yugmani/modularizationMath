var maths = require("./maths.js");

console.log(maths.num1);
console.log(maths.num2);
console.log(maths.operation);


switch(maths.operation) {
    case "sum" :
    case "+":
        console.log(maths.num1 + maths.num2);
        break;
    case "differ":
        case "-":
        console.log(maths.num1 - maths.num2);
        break;
    case "product":
        
        console.log(maths.num1 * maths.num2);
        break;
    case "divide":
        
        console.log(maths.num1 / maths.num2);
        break;
    default: 
        console.log("error");
        break;
}

