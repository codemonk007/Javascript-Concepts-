#### Inheritance

**Prototyipical**
javascript supports both prototypical inherritance and hirarchical inheritance.

Every Object that is defined from the same source in javascript inherrites same _proto_ object which is the parent most object for all of them.
Each object will have its own copy of prototype. it has common methods are loaded into memory .So that each time object is created we dont have to create these common methods.

```javascript
    let test= function(name,sirname){
        this.name=name;
        this.sirname=sirname;
    }
    test.prototype.getName=function(){
        return this.sirname;
    }
    let Test1=new test("Ganapati","Bhat");
    let Test2=new test("Ganapati","Hegde");
    console.log(Test1.getName());
    console.log(Test2.getName());
```

we can also set the proto type to parent Object 
Ex:
```javascript
    var employee = function(name)
    {
        this.Name = name;
    }
    employee.prototype.GetName = function(){
        return this.Name;
    }
    var pEmployee= function(salary)
    {
        this.Salary = salary;
    }
    pEmployee.prototype = new employee("Ganapati");//here we are binding the child and parent relatiinship
    var newpe = new pEmployee(235);
    console.log(newpe.Name);
    console.log(newpe instanceof employee); // true
    console.log(newpe instanceof pEmployee);// true
```
However Name is not a direct property of newPe
```javascript
console.log(newpe.hasOwnProperty('Name')); // returns false
```
#### array method also can be included as prototipical property
```javascript
let t=[1,2,2,4,5,10];
Array.prototype.min=function(){
    let temp=this[0];
    for (let i = 0; i < this.length; i++) {
        if(temp >this[i]){
            temp=this[i]
        }
        
    }
    return temp;
}
console.log(t.min());
```

### hirarchical inheritance

comes with class concept.It can extend other class or implement diferent interfaces.
A call of super is mandatory at the time to extending a parent js file.
```javascript
class baseClass{
    constructor(name)
    {
        console.log(name + " parent class constructor getting called");
    }
    greet(){
        console.log("parent class method getting called");
        return 10;
    }
}

class childClass extends baseClass{
    constructor(red)
    {
        super(red);//calling the parent constructor
    }
    greet(){
        return super.greet();//calling the parent method
    }
}
let c = new childClass("Ganapati Bhat");
console.log(c.greet());

```
* super call is mandatory in ase if emergency .
