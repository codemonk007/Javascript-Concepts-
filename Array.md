# Array
#### Array Has been most vital usued concept in javascript.
##### Javascript comes up with Many OOB methods which makes Array rich enough to solve any problem 

### Array defination 
1.  ```javascript
    let Test=[];
    ```
2.  ```javascript
    let Test=new Array();
    ```
3.  with fixed size 
    ```javascript
    let Test=new Array(4);
    ```
4.  other way of defining fixed length Array
    ```javascript
    let Test=new Array();
    Test.length=0;
    ```
##### Key Methods 
1.  push
2.  pop
3.  Shift
4.  unShift
5.  slice
6.  Splice
7.  reduce
8.  filter
9.  map
10. some 

### push 
    used to add new wliment to Array
```javascript
    let Test=new Array();
    Test.push('One','two');
    console.log(Test)
 ```
###### spread (...) can be used to clone other Array and add extra items to new Array
```javascript
   let Test=new Array();
Test.push('One','two');
console.log([...Test,'five'])
  ```
##### pop 
    used to remove and return top most / latest added Array item
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.pop();
    console.log(item)
 ```
 ##### unShift 
    used to add new item in the start of Array and returns length of Array.
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.unshift('none');
    console.log(Test)
    console.log(item)
 ```

##### Shift 
    used to remove item from the starting of Array and returns the removed item
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.shift();
    console.log(Test)
    console.log(item)
 ```
##### Slice 
    used to create a new Array out of existing Array.
    slice method takes two parameters starting index and ending index.
    Syntax:
        Array.prototype.slice(start,end);        
1.  
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.slice();
    console.log(Test)
    console.log(item)
 ```
2.  
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.slice(1,3);
    console.log(Test)
    console.log(item)
 ```
3.  
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.slice(1);
    console.log(Test)
    console.log(item)
 ```
##### splice 
    used to remove item from the Array and returns the removed item
    slice method takes two parameters starting index and how many to delete ( i.e The number of items to be removed. If set to 0, no items will be removed )
    Syntax:
        Array.prototype.splice(start,howMany to remove,additem1,additem2..);
    The splice() method adds/removes items to/from an array, and returns the removed item(s).
1. 
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.splice(1,0,'ten','nine');
    console.log(Test)
    console.log(item)
 ```
2. 
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.splice(1,2);
    console.log(Test)
    console.log(item)
 ```
3. 
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.splice(1);
    console.log(Test)
    console.log(item)
 ```
4. 
    To delete Entire Array using Splice
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.splice(0);
    console.log(Test)
    console.log(item)
 ```
##### reduce 
    used to reduce Array items into single values
    Syntax:
        Array.prototype.reduce(element,accumilator);
1. 
```javascript
    let Test=new Array('One','two','three','four');
    let item=Test.reduce((element,accumilator)=> element +" "+accumilator);
    console.log(Test)
    console.log(item);
 ```
##### filter 
    used to filter out any Array into one or more items on a specific condition .returns a new value.
    Syntax:
        Array.prototype.filter(element,index);
1. 
```javascript
    let Test=new Array(10,20,30,40,50,60);
    let item=Test.filter((element,index)=> {console.log(index); return element%2 === 0});
    console.log(Test)
    console.log(item);
```

##### map 
    used to map existing state of each item of array into expected other state .returns a new Array.
    Syntax:
        Array.prototype.map(element,index);
1. 
```javascript
    let Test=new Array(10,20,30,40,50,60);
    let item=Test.map((element,index)=> element = element+1);
    console.log(Test)
    console.log(item);
```
##### some 
   The some() method checks if any of the elements in an array pass a test (provided as a function).
    The some() method executes the function once for each element present in the array:

    If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
    Otherwise it returns false

    some() does not execute the function for array elements without values.

    Syntax:
        Array.prototype.map(element,index);
1. 
```javascript
    let Test=new Array(10,20,30,40,50,60);
    let item=Test.some((element,index)=> return element%2 === 0);
    console.log(Test)
    console.log(item);
```





     





