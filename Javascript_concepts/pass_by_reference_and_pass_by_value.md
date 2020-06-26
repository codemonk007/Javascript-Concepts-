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
**IMP**
Javascript has 3 data types that are passed by reference: **Array, Function, and Object**. These are all technically Objects, so we’ll refer to them collectively as Objects.

Primitive type variable like **string,number** are always pass as pass by value.
Array and Object is passed as pass by reference or pass by value based on these two condition.

1. if you are changing value of that Object or array with new Object or Array then it is pass by
   Value.

```javascript
    object1 = {item: "car"};
    array1=[1,2,3];
```
here you are assigning new object or array to old one.you are not changing the value of property of old object.so it is **pass by value**.
If you are changing a property value of an object or array then it is pass by Reference.
```javascript   
    object1.item= "car";
    array1[0]=9;
```
here you are changing a property value of old object.you are not assigning new object or array to old one.so it is **pass by reference**.
