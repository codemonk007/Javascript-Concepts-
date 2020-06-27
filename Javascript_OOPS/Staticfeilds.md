Static feilds are part of classes ,They are not part of any object.
There will be only one copy in lifecycle of the program.

```javascript
var Shape = function(name){

    this.shapeName = name;

    Shape.count = ++Shape.count || 1;
    Shape.ShapeCount = function(){
        return Shape.count;
    }
}

var cir = new Shape("circle");
var tri = new Shape("triangle");
console.log(Shape.ShapeCount());
```

we get the output as 2 as single instance of the variable countis created and it gets increment on updating.