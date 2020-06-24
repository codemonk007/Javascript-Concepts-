### Call
call is used to pass the object in runtime to function . It can be used to pass owner object as argument .

1. 
```javascript
    function test(){
        console.log(this);
    }
    let Obj={
        "hello":"World"
    }
    test.call(Obj)
```
2. 
```javascript 
    let test= function (year,salary){
        console.log(this.name+" is earning "+salary+" on year "+year)
    }
    let testObj={
        name:"Ganapati"
    }
    test.call(testObj,2014,1300000)
```
### apply 
Apply is similar to call however arguments are passed in array. Owner object will not be part of this array.
 Ex :

1.  
```javascript
    function test(){
        console.log(this);
    }
    let Obj={
        "hello":"World"
    }
    test.apply(Obj)
```

2.  
```javascript
     let test= function (year,salary){
    console.log(this.name+" is earning "+salary+" on year "+year)
    }
    let testObj={
        name:"Ganapati"
    }
    test.apply(testObj,[2014,1300000])
```

### bind
bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. 
bind sets currect this context for the function.

Ex:
```javascript
    var obj = {num:2};
    var printSum = function(ab,cd){
    return this.num + ab + cd;
    }
    var arr = [1,2];
    var Test = printSum.bind(obj);
    console.log(Test(1,2));
```

