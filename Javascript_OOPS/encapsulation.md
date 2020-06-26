### Encapsulation 
wrapping the state and behavior into single entity 
Classical encapsulation 

*   use var keyword to declare variables in constructor
*   use setters and getters to read and write data

With setters and getters we can easily control the properties of Object
    ### Prototypical Encapsulation  
    We are using Javascript Object.defineProperties to control the properties of Object.
Ex: 
```javascript
var person = function()
{
    var _location ;
    var _name ;

    Object.defineProperty(this,"name",{
        get:function(){return _name;},
        set:function(value){
            if(/\d/.test(value))
            {
                console.log("name can not have numbers");
            }
            else{
               _name = value;
            }
        }
    })
    Object.defineProperty(this,"location",{
        get:function(){return _location;},
        set:function(value){
            _location = value;
        }
    })
}
var p = new person();
p.name = "Ganapati";
p.location = "Kyadgi";
console.log(p.name);
console.log(p.location);
```
Using Objet defineProperties we can also restrict the object if the properties can be **updatable**,**deletable** or **consolable/printable**.

Ex:
```javascript
const test = {};
Object.defineProperties(
    test,
    {
        V1:{ value : 1, writable: true, enumerable: true, configurable: true},
        V2:{ value : 2, writable: true, enumerable: true, configurable: true}
    }
);
console.log(test);  
```

