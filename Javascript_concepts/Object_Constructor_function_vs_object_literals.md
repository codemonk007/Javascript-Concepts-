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
3. using Object.assign() method
```javascript
    var object1 = {
        name:"gaurav",
        habit(){
            return this.name;
        }
    }
    var red  = Object.assign({},object2);
    console.log(red);
```
4. Directly using {} to create an object .
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
There are couple of Tricky instances where we have to look upon 
Object.create() and using a new keyword some how behaves bit defferntly while creating the Object 
Ex:
```javascript
function Dog(){
    this.pupper = 'Pupper';
};

Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);


//Using Object.create()
console.log(buddy.pupper); //Output is undefined
console.log(buddy.pupperino); //Output is Pups.

//Using New Keyword
console.log(maddie.pupper); //Output is Pupper
console.log(maddie.pupperino); //Output is Pups.

```
Notice the output of buddy.pupper is undefined.Even though Object.create() sets its prototype to Dog,**buddy** does not have access to **this.pupper** in the constructor. This is due to the important difference that **new Dog** actually runs **constructo**r code,whereas Object.create will not execute the constructor code.



#### some of mail object methods
```javascript
Object.defineProperty
Object.create
Object.assign
Object.keys
Object.values
Object.entries // gives output in ["key",value] form
Object.freeze

const obj1 = {
  apple: 28,
  orange: 17,
  pear: 54,
}

var arraofarray = Object.entries(obj1);
for(var [key,val] of arraofarray)//use destructring here to get the keys and values here
{
    console.log(`The key is ${key} and the value is ${val}`);
}
```
**Object.freeze()** which is used to freeze an object. Freezing an object does not allow new properties to be added to an object and prevents from removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability and the prototype of the object. It returns the passed object and does not create a frozen copy.

Applications:
Object.freeze() is used for freezing objects and arrays.
Object.freeze() is used to make an object immutable.
Syntax:

Object.freeze(obj)
Parameters Used:

obj : It is the object which has to be freezed.
Return Value:
Object.freeze() returns the object that was passed to the function.

Examples of the above function are provided below.

Examples:

Input : 
```javascript
        const obj1 = { property1: 'initial_data'};
        const obj2 = Object.freeze(obj1);
        obj2.property1 = 'new_data';
        console.log(obj2.property1);
```