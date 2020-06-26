when it comes to Array it is always pass by reference and shallo copy.
```javascript
    var myArray = [1,2,3,4];
    let newArr = myArray;

    console.log(myArray);
    console.log(newArr);

    myArray.length = 0;

    console.log(myArray);//it will  change the value for both as its passed by ference.
    console.log(newArr);
    //should use slice array.from or concat to have deep copy and separate memory location
```
When it comes to string it is always immutable and pass by value.
```javascript
    var oldstring = "Hi Ganapati";
    var newstring = oldstring;

    console.log(oldstring);
    console.log(newstring);

    oldstring = oldstring + " Bhat";


    console.log(oldstring);
    console.log(newstring);//change in original doesnt make new change as its passed by value
```
