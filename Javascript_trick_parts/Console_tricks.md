basic rule is 
* Number + Number -> Addition
* Boolean + Number -> Addition
* Boolean + Boolean -> Addition
* Number + String -> Concatenation
* String + Boolean -> Concatenation
* String + String -> Concatenation

Ex:
```javascript
    console.log(1+1) // 2
    console.log(true +1 ) //2
    console.log(true +true ) //2
    with addition to string it is always concatination .additio
    console.log("Hi " +1 ) //Hi 1
    console.log(1 +" Hi" ) //1 Hi
    console.log(1+undefined) // NaN
    console.log(null+undefined)//NaN
    console.log(1+null); // 1 
    console.log("hello"+undefined);// hello uindefined
    console.log("hello"+null);// hello null
    console.log(3+ String)  // 3 function String() { [native code] }"
    console.log(red+3)// error
    console.log(3+red)// error
```
console.table is much advisable to use for arrays 

```javascript
let a=[{"name":"ganapati","sirname":"bhat"},
{"name":"Nisjhant","sirname":"bhat"},
{"name":"Ganapati","sirname":"Hegde"},
{"name":"Shridhar","sirname":"bhat"}]
console.table(a)
```
