in Es5 if we need to define any function in Object we have to bind to pass any feilds of this object 
Ex
```javascript
var ipl={
    name :"Ganapati",
    greet:function(){
       console.log(this.name);
      setTimeout(function(){
          console.log("set Interval function value-" + this.name);
      },500);
    }
 }
```
This returns a undefined value
This issue is because functions are context scope which checks local context and then parent context ultimately with global context if not avaliable anywhere.
To correct this we have to bind the function with this .
```javascript
var ipl={
    name :"Ganapati",
    greet:function(){
       console.log(this.name);
      setTimeout(function(){
          console.log("set Interval function value-" + this.name);
      }.bind(this),500);
    }
 }

```
However Arrow function makes it easy as they refer to the lexical scope. 

```javascript
var ipl={
    name :"ganapati",
    greet:function(){
       //var self = this;
      setTimeout(()=>{console.log("value from here- "  + this.name)},500);
    }
 } 
 ipl.greet();
``` 
here 'this' is not bound to anything, and will inherit the value of this from its parent scope.



