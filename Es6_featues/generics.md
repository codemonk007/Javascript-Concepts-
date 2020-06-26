This feature can be tested in Ts file tan js file 
genaral syntax for generics is :
Ex: 
```javascript
function add <T>(a:T):T{
    return a;
}

let a:String=add(1)
```
Error is being thrown telling Type '1' is not assignable to type 'String.
```javascript
function add <T>(a:T):T{
    return a;
}

let a:String=add("1")
```