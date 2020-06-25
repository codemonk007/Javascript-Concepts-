ES6 has introduced list of new featured making javascript much more advance and robust.

#### New addition 
* Arrow Functions
* Classes
* Enhanced Object Literals
* String interpolation
* Destructuring
* Default
* Spread
* Spread + Object Literals
* Rest
* Let & Const
* For..of
* Unicode
* Modules & Module Loaders
* Set
* WeakSet
* Map
* WeakMap
* Proxies
* Symbols
* Inheritable Built-ins
* New Library
* Binary and Octal
* Promises
* Reflect
* Tail Call Optimization

Some of important concetps 

**Template Literals**

In Es5 we had to used + and "" to separate variables and string .Es6 comes with two ways where representing and consoling variables with string is much more easy.

Ex:
```javascript

**ES5** var name = 'Your name is ' + first + ' ' + last + '.'
**ES6** var name = `Your name is ${first}  ${last}.` (inside of the **back-ticked**).
        also we can use **{{}}** to represent any variable in templates.

        Another yummy syntactic sugar is multi-line string. In ES5, we had to use one of these approaches:
        Ex:
            let test=`This is just a test
                      to test new features of Es6`
        out put preserves the space.

```
**Destructuring Assignment**
easy assignment of properties of Json/Array into other variables
Ex:
```javascript
**ES5**
    var body = req.body, // body has username and password
    username = body.username,
    password = body.password
**ES6**
    var {username, password} = $('body').data();
```
considering $('body').data() contains Username and password;
assiging properties should match the assigned properties.
    
This works with Array as well.
 
    [line1, line2, line3, , line5] = file.split('\n')
```javascript
    let test=[1,2,3,4]
    let testA;
    let testB;
    [testA,testB]=test;
    console.log(testA)
    console.log(testB)

    other example 
    const a = 1, b = 2, c = 3;
    obj = {a b c };    
```

**Arrow Functions**

Arrow functions are latest entry to javascript .It is a way of writing lamda in javascript functions.
Arrow functions are easy and pure.
this will have the same value as in the context of the function—it won’t mutate. The mutation typically happens each time you create a closure.
Using arrows functions in ES6 allows us to stop using that = this or self = this or _this = this or .bind(this). For example, this code in ES5 is ugly:

**Es5**
```javascript
    var _this = this
    $('.btn').click(function(event){
    _this.sendData()
    })
**ES6**
    $('.btn').click((event) =>{
    this.sendData()
    })
```
Also this avoids usage of bind,call and apply.
```javascript
**ES5**
    var logUpperCase = function() {
    var _this = this

    this.string = this.string.toUpperCase()
    return function () {
        return console.log(_this.string)
    }
    }

    logUpperCase.call({ string: 'es6 rocks' })()
**ES6**
    var logUpperCase = function() {
    this.string = this.string.toUpperCase()
    return () => console.log(this.string)
    }
```

#### Promises
Promises are an efficient alternative to callbacks.

```javascript
    let test=new Promise((resolve,reject)=>{
        return resolve("test");
    })
    test.then((result)=> console.log(result));
```
####  Block-Scoped Constructs Let and Const
 var is function scope and prints undinfed if value is not assigne dto variable when it is used.
 let and const are block scope and let throws error if it is being used outside its scope.

```javascript
1.  console.log(color);//undefined
    var color = "blue";
    console.log(color);

    console.log(color);//error
    let color = "blue";
    console.log(color); 
2.  var color;
    console.log(color);//undefined
    color = "blue";
    console.log(color); 

    let color;
    console.log(color); //undefined
    color = "blue";
    console.log(color); 
3.  console.log(getProduct(2, 3)); // error
    var getProduct = function(num1, num2) {
    return num1 * num2;
    };
    console.log(getProduct(2, 3));
4.  console.log(getProduct(2, 3));// returns value

    function getProduct(num1, num2) {
    return num1 * num2;
    }
```
#### class 

#### using import to include external/internal modules (an alternativer to commonJs require)

#### for.. of

Ex: 
```javascript
var colors = ["red","blue","green","black"];
for(let col of colors)
{
    console.log(col);//here we get the actual data;
}
var colors = ["red","blue","green","black"];
for(let col in colors)
{
    console.log(col);//here we get the index of the elemenst in the array.
}
```
however For in works well with Json as well
```javascript
var colors = {
    name:"ganapati",
    sirname:"bhat"
};
for(let col in colors)
{
    console.log(colors[col]);//here we get the index of the elemenst in the array.
}
```