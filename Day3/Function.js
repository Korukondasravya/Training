// function demo(){
//     console.log("Hello")
// }
// console.log(demo)//calling fun name
// console.log(demo())//calling fun

//Create a function to perform Arthematic operation for two numbers and Input should be taken from the end user

// Function to perform arithmetic operations
function ArithmeticOperation() {
    // Prompt the user for input
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));

    // Validate the inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }


//     // Prompt the user for the operation
    const operation = prompt("Enter the operation (+, -, *, /):");

    // Perform the operation based on user input
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please enter one of +, -, *, or /.");
            return;
    }

    
    alert(`The result of ${num1} ${operation} ${num2} is ${result}`);
}


ArithmeticOperation();
//
// console.log("Own");
// function Arithmetic(){
//     let a=Number(prompt("Enter a value:"))
//     let b=Number(prompt("Enter b value:"))
//     c=a+b
//     alert(c)
//     //console.log(c);
    
    
// }
// Arithmetic();

