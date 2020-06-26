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