#### ES6 provided a way to pass default parameters to avoid null check.
```javascript
    function foo(num1 =9) {
        console.log(num1);
    }
foo();
```
**Output :- 9**
```javascript
function foo(num1 =9) {
    console.log(num1);
}
foo(34);
```
**Output :- 34**
if we pass undefined-

```javascript
function foo(num1 =9) {
    console.log(num1);
}
foo(undefined);
```
**Output :- 9**

Default parameters are available to be used by later default parameters.
Ex:
```javascript
function foo(num1 = 9, num2 = num1 + 8){
    console.log(num2);
}
foo();
```