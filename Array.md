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
8.  map
9.  some

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


