A generator is a function that can stop midway and then continue from where it stopped. 
In short, a generator appears to be a function but it behaves like an iterator.

For creating a generator function, we use function * syntax instead of just function.
Any number of spaces can exist between the function keyword, the *, and the function name. 
Since it is just a function, you can use it anywhere that a function can be used 
i.e inside objects, and class methods.

Ex:
```javascript
function * generatorFunction() { // Line 1//we declare a generator function with a * notation
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2//call it using fuction.next.val and it will stop at every yield and retur  the stuff after every yield
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6//This will return undefined
```
Inside the function body, we don’t have a return. Instead, we have another keyword yield (Line 2). It’s an operator with which a generator can pause itself. Every time a generator encounters a yield, it “returns” the value specified after it. In this case, Hello, is returned. However, we don’t say “returned” in the context of generators. We say the “the generator has yielded Hello, ”.
  
  _________________________________________________________________________________________
  
  We can also return from a generator. However, return sets the done property to true after which the generator cannot generate any more values.
  
```javascript
   function *  generatorFunc() {
    yield 'a';
    return 'b'; // Generator ends here.
    yield 'a'; // Will never be executed. 
    }
```
  
  
  
