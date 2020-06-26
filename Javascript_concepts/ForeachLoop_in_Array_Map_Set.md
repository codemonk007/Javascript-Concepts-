Foreach is modern way of iterating Array/Object items.
**Array**
```javascript
var numbers = [1,2,3,4,5,6,7];

numbers.forEach(function(value,index,array)
{
console.log("Value" + value + "Index" + index+ "array" + array);
})
```
**Map**
```javascript
var myMap = new Map([["fname","gaurav"],["lname","Rattan"]]);
myMap.forEach(function(value,key,callingMap)
{
    console.log("Value--->" + value + "   key-->" + key);
})
```
**set**

var myset = new Set([2,4,5,6,11,89]);

myset.forEach(function(value,key,callingSet)
{
    console.log("Value" + value + "key" + key);
    console.log(myset == callingSet);
})
//gives 2,4,5... as both value and key as output
