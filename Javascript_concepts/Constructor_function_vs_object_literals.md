#### Constructor methods
there are various way where in we can define objects in javascript 
here are the few ways and p[ossible defferences 
1.  using new keyword
```javascript
    var employee = function(fname)
    {
        this.Fname = fname;
    }
    var Test = new employee("Ganapati");
    console.log(Test);
```
here we are calling the constructor function using the new keyword we get name as well as the _proto_

2.  using Object.create() method. here we directly get the _proto_
```javascript
    var employee = function(fname)
    {
            this.Fname = fname;
    }
    var Test = Object.create(employee.prototype);
    Test.Fname="ganapati";
    console.log(Test);
```
3. Directly using {} to create an object .
```javascript
    var employee = {
    fname:"Ganapati",
    lname:"Bhat",
    getFullName(){
        return this.fname + this.lname;
    }
}
var den = employee;//we dont need new keyword here as its already a object
console.log(den);
```


##### few of the tricky parts
1. Change in one isntance doesnt effect the other
```javascript 
    var employee = function(fname)
    {
        this.Fname = fname;
    }
    var Test = new employee("Ganapati");
    var Test1 = new employee("Bhat");
    Test.Fname = "Ganesh";
    console.log(Test);
    console.log(Test1);
```
Here output is
    employee { Fname: 'Ganesh' }
    employee { Fname: 'Bhat' }
    Each objects are pointing to its own memory and hence change in one onject doesnt change the other object.

2. for singlton objects 

```javascript 
var employee = {
    fname:"Ganapati",
    lname:"Bhat",
    getFullName(){
        return this.fname + this.lname;
    }
}
var den = employee;
den.fname="Narayan";
var red = employee;
console.log(den);
console.log(red);
```
here the memory shared for the object is same and references are pointing to same location .change in one object makes the change in other object.

Ex:
```javascript 
    var employee = {
        fname:"Ganapati",
        lname:"Bhat"
    }
    var Test = employee;
    Test.fname="Narayan";
    var Test1 = employee;
    console.log(Test);
    console.log(Test1);
```
