### callbacks
A call back is a function that is to be executed once higher oder function returns.
in other way A callback is a function that is to be executed after another function has finished executing.

In javascript function are also objects .So any object can be passed as parameters in calling function .and this function cal be executed inside outer function.
so the passed function as parameter is called as callbacks.


Ex:
1.  
```javascript
    var x = function(){
        return 23;
    }
    var print = function(callback)
    {
        return callback();
    }
    console.log(print(x));
2. 
    var sum = function(a,b)
    {
        return a +b;
    }

    var mul = function(a,b)
    {
        return a * b;
    }

    var printsum = function(a,b,callback)
    {
        return callback(a,b);
    }

    console.log(printsum(1,2,sum));
```
### Promise
    A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
    
*    The immutability of a settled promise is an important feature.
*    A promise or “thenable” is an object that supplies a standard-compliant .then() method.
*    A pending promise may transition into a fulfilled or rejected state.
*    A fulfilled or rejected promise is settled, and must not transition into any other state.
*   Once a promise is settled, it must have a value (which may be undefined). That value must not         change.
*    Only function that creates the promise has the ability to cancel the promise other wise it            voilates encapsulation.


    Promises can be chained whcih makes them more efficient than callbacks .
 ```javascript
    const wait = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait(200)
  // onFulfilled() can return a new promise, `x`
  .then(() => new Promise(res => res('foo')))
  // the next promise will assume the state of `x`
  .then(a => a)
  // Above we returned the unwrapped value of `x`
  // so `.then()` above returns a fulfilled promise
  // with that value:
  .then(b => console.log(b)) // 'foo'
  // Note that `null` is a valid promise value:
  .then(() => null)
  .then(c => console.log(c)) // null
  // The following error is not reported yet:
  .then(() => {throw new Error('foo');})
  // Instead, the returned promise is rejected
  // with the error as the reason:
  .then(
    // Nothing is logged here due to the error above:
    d => console.log(`d: ${ d }`),
    // Now we handle the error (rejection reason)
    e => console.log(e)) // [Error: foo]
  // With the previous exception handled, we can continue:
  .then(f => console.log(`f: ${ f }`)) // f: undefined
  // The following doesn't log. e was already handled,
  // so this handler doesn't get called:
  .catch(e => console.log(e))
  .then(() => { throw new Error('bar'); })
  // When a promise is rejected, success handlers get skipped.
  // Nothing logs here because of the 'bar' exception:
  .then(g => console.log(`g: ${ g }`))
  .catch(h => console.log(h)) // [Error: bar]
```
