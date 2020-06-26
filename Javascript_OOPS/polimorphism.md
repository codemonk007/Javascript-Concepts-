an object or method performing multiple behaviours at compile (in javascript it is interpretation time) or run time is known as polymorphism.

### interpretation time polymorphism 
In java script unlike OOP languages like java,c# custtructor overloading ,method over loading is not possoble .
w.r.t **Constructor overloading** we can achive in a way by defining default parameters .
Ex:
```javascript
class vehicle{
    constructor(number=0,engine="Honda",){
        this.number=number;
        this.engine=engine;
    }
}
let maruthi = new vehicle();
console.log(maruthi);
let swift = new vehicle("1244");
console.log(suzuki)
let Suv = new vehicle("1224","mahendra");
console.log(Suv);
```
w.r.t **method overloading** ,javascript imterpretes the latest method defined as the final one and ommits the defination of previous ones.
Ex:
```javascript
class vehicle{
    constructor(number=0,engine="Honda",){
        this.number=number;
        this.engine=engine;
    }
    test(){
        console.log("I am Empty");
    }
    test(value){
        console.log("I am wth Value --->",value);        
    }
    test(value,value1){
        console.log("I am wth 2 Value --->",value,"--",value1);        
    }
}
let maruthi = new vehicle();
maruthi.test() //I am wth 2 Value ---> undefined -- undefined
```

**Rest** partameter solves most of overloading complexities.Rest Parameters, which represents an unknown number of parameters as an array in a function. It not only represents extra parameters as an array, it also solves many of the problems of the arguments object.

It takes parametr in the form of dynamic Array.
Ex:
```javascript
1.   function add(...param)
    {
        for(let p of param)
        {
            console.log(p);
        }
    }
    add(1,2,3,5) 
    add(1,2,3)

2. 
    function add(first,second,...param)
    {second
        console.log(first);
        console.log(second);
        console.log("++++++++")
        for(let p of param)
        {
            console.log(p);
        }
    }
    add(1,2,3,5)
3. 
    function add(num1, ...theArgs,num2){
        console.log(num1);
        console.log(num2);
        console.log(theArgs.length);
    }
    add(1,2,3,5);
```
In the above code listing, the rest parameter is not the last parameter, so JavaScript will throw an error. The rest parameter must be the last formal parameter.

We can also restrict the number of parameters being passed.
Ex:
```javascript
function add(...[a,b,c]){
    return a+b+c; 
}
var r = add(6);
console.log(r);
var t = add(7,56,9);
console.log(t);
```
For a first-time function call, a=6 , b= undefined, c = undefined will be assigned, and for the second function call, a=7, b=56, c=9 will be assigned. In this case, if you pass any extra parameter then that will be ignored in the function.

### Run time polimorphism
runtime polymorphism is not possible in javascript but using **ducktyping** we can achive runtime polymorphism.

Ex:
```javascript
class roadtruck{

    run(){
        console.log("running on roads");
        
    }
}
class Airbus{

    run(){
        console.log("flying the sky");
    }
}
class ship{
    run(){
        console.log("on ocean");
    }
}
let test=[new roadtruck(),new Airbus(),new ship()];
test.forEach(element => {
    element.run(); // it is calling each object's run method and is on runtime
});
```

