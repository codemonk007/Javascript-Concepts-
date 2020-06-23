promises are used for efficient call backs .promises works brilliantly 

```javascript
var myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Test 1");
    }, 3000);
})
var newProm = myPromise.then(function(res)
{
    console.log("Test 2");
    console.log(`Test 3`);
    return new Promise(function(resolve,reject){
        resolve("Test 4");
    })
});
newProm.then(function(resolve)
{
    console.log(`Test 5  ${resolve}`);
});
console.log("Test 6 called");
console.log("Test 7 called");
```
other way of writing Promise for calling multiple promises for seamless callbacks
```javascript
    var myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Test 1");
    }, 3000);
    })
    var newProm = myPromise.then(function(res)
    {
    return new Promise(function(resolve,reject){
        resolve("First Promise");
    })
    }).then((result)=>
    {
    console.log(result);
    return new Promise(function(resolve,reject){
        resolve("Second Promise");
    })
    }).then((result)=>{
    console.log(result);
    });
    console.log("this is called immediatly");
    console.log("this is called immediatly");
```
problem with this structure is we have to depend on several call backs and some time it can cause major problem to fix some bugs in prod ready environment.

ES6 comes with Best way to avoid this call back hell using async await notations.
1.  A normal function can be made asyncronous simply using Async with the function defination 
2.  Await can be used only in asyncronous function
Ex: 
Using only async 
```javascript
    console.log("customer 1 called");
    console.log("customer 2 called");
    var myFunc = async () => 'Hello Ganapati';//this is the async function which always return a promise
    myFunc().then((mess)=> console.log(mess));
    console.log("customer 3 called");
    console.log("customer 4 called");
```

async and await-
```javascript
    console.log("Test 1");
    console.log("Test 2");
    var myFunc = async () => {
        var mypromise = new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve("Test 3");
            }, 2000);
        });

        var promisePop = new Promise(function(resolve,reject){
            resolve("Test 4");
        })

    var thnkpop = await promisePop;
    console.log(`this is = ${thnkpop}`);

        var ticket = await mypromise;
        return ticket;
    };

    myFunc().then((m) => console.log(m));

    console.log("Test 5");
    console.log("Test 6");
```