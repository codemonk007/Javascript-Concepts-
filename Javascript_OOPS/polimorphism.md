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


