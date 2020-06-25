### Classes and Functions
Classes are new edition to javascript family 
Each term in javascript represents an object 

some of rules of class
1.  hoisting will not work in classes and its members
2.  there are three methods that we can declare in javascript
    *    constructor methods
    *    static methods
    *    prototype methods

    ###### constructor methods
     constructor method gets intiated when an object gets created
``` javascript  
    class test{
        constructor(name) {
            this.name = name;
            console.log(this.name + 'from constructor');
        }
    }
```
    rule is here if the class variable name and constructor parameter names are same ,Then we dont have to specifically mention and assign value 
        i.e
```javascript
    class test{
        constructor(name) {
            console.log(this.name + 'from constructor');
        }
    }
```

###### static methods
    static methods are part of class and will be available globally for anything ascociated with the class
```javascript
    greet() { //norma prootype methods

        console.log('Its  a prototype method');
    }
}
let p = new Employee('Ganapati Bhat');
Employee.getname();
p.greet();
```

######  prototype methods 
    Prototype methods are the usual Object methods defined in class.an instantiation is necessary to consume them.





