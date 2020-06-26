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
**Hoisting Logics**
```javascript
1.  console.log(red(1,2)); //outpiuts 3 as it is a function literal 
    function red(a,b)
    {
        return a + b;
    }

2.  console.log(t(1,2)); //outpiuts undefined as it is assigned to a variable which will be hoisted       during interpretation 
    var t=function(a,b)
            {
                return a + b;
            }
3.  var red;
    console.log(red);//undifined

4.  console.log(red);
    var red =56;// undefined 

5.  console.log(red);
    let red =56;// Error as we have used let which will not ne hoisted.
```
