#### Abstraction
An abstraction is a way of hiding the implementation details and showing only the 
functionality to the users. In other words, it ignores the irrelevant details and shows 
only the required one.
1.  We cannot create an instance of Abstract Class.
2.  It reduces the duplication of code.

Ex:
```javascript
    Ex:  
    //parent
    function Vehicle()  
    {  
        this.vehicleName="vehicleName";  
        throw new Error("You cannot create an instance of Abstract Class");  
    }  


    Vehicle.prototype.display=function()  
    {  
        return "Vehicle is: "+this.vehicleName;  
    }  

    //Creating a constructor function  
    function Bike(vehicleName)  
    {  
        this.vehicleName=vehicleName;  
    }  

    //Creating object without using the function constructor  
    Bike.prototype=Object.create(Vehicle.prototype);  
    var bike=new Bike("Honda");  

    console.log(bike.display())
    console.log(bike instanceof Vehicle)
    console.log(bike instanceof Bike)
```

**Abstract classes in ES6** are base classes from which other classes can extend. They cannot be instantiated themselves (i.e.
you cannot do new Machine("Konda")).
The two key characteristics of an abstract class in TypeScript are:
1. They can implement methods of their own.
2. They can define methods that inheriting classes must implement.
For
```javascript

abstract class Human { 
    age: number;
    constructor(age) { 
        this.age = age;
    }

    calAge() { 
        return `The age of the person is ${this.age}`
    }

    abstract play();
}

class Boy extends Human { 
    constructor(age) { 
        super(age);
    }

    play() { 
        return "We are implementing the abstrct methods";
    }
}

var bb = new Boy(23);
console.log(bb.calAge());
console.log(bb.play());
```