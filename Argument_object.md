# Argument Object

*   Arguments object is used to access unknown or variable function parameters. 
*   Even though arguments uses length property and square brackets, it is not a real JavaScript         array. 
*   You cannot use other JavaScript array methods like pop, push, slice etc. with the arguments         object.
   Some of the problems in using arguments are:
*   It is difficult to access an arguments object of an outer function in an inner function. 
*   To use it, you need to assign the arguments function of the outer function in a variable,
    and then use it in an inner function.
*   If you want to use the arguments object as an array, 
    then you need to convert it manually using Aarry.prototype.slice.

Example:
```javascript
        function add(){
            var result = 0; 
            for(let i=0;i<arguments.length;i++){
                result = result + arguments[i];
            }
            return result; 
        }
        var r = add(6,9,3,2);
        console.log(r);
        var t = add(7,56,9);
        console.log(t);
```