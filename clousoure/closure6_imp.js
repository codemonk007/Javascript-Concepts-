Write a function multiply() that multiples 2 numbers:

function multiply(num1, num2) {
  // Write your code here...
}
If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.

But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);
double(5);  // => 10
double(11); // => 22


//answer
function multiply(number1, number2) {
    if (number2 !== undefined) {
      return number1 * number2;
    }
    return function doMultiply(number2) {
      return number1 * number2;
    };
  }
  
  multiply(4, 5); // => 20
  multiply(3, 3); // => 9
  
  const double = multiply(2);
  double(5);  // => 10
  double(11); // => 22