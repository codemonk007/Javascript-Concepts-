####Memory-Leak

A Memory leak can be defined as a piece of memory that is no longer being used or required by an application but for some reason is not returned back to the OS and is still being occupied needlessly. Creating objects and variables in your code consumes memory. Javascript is smart enough to figure out when you won’t need the variable anymore and will clear it out to save memory. A Javascript memory leak occurs when you may no longer need an object but the JS runtime still thinks you do. Also, remember that javascript memory leaks are not caused by invalid code but rather a logical flaw in your code. It leads to the diminished performance of your application by reducing the amount of memory available for it to perform tasks and could eventually lead to crashes or freezes.
##### Garbage_Collector
Garbage collectors execute the process of finding memory which is no longer in use by the program and releasing it back to the OS for future reallocation. To find the memory which is no longer being used, garbage collectors rely on algorithms. Though the garbage collection method is highly effective, it is still possible for Javascript memory leaks to occur. The main cause for such leaks is very often- ‘unwanted reference’. The primary reason for this is the fact that garbage collection process is based on estimations or conjectures, as the complex problem of whether some memory needs to freed cannot be determined by an algorithm correctly at every instance.

Before moving further, let’s take a look at the two most widely used GC Algorithms

As we discussed earlier, any garbage collection algorithm must perform 2 basic functions. It must be able to detect all the memory that is no longer in use and secondly, it must free/deallocate the space used by the garbage objects and make it available again for reallocation in future if needed.

##### The 2 most popular algorithms are
1.  **Reference count**
2.  **Mark and Sweep**

Cause of JS Memory Leak-

1. **Accidental Global Variable Case** :
If you assign a value to a variable without prior declaration, it will create an ‘automatic’ or ‘accidental global variable’. This example will declare a global variable a, even if it is assigned a value inside a function.
```javascript
       // variable ‘a’ has global scope
       function myFunction() {
           a = "this is an accidental global variable";
           // variable ‘a’ is global as it has been assigned a value without prior declaration
       }
```
SOLUTION: Global variables by definition are not swept away by garbage collectors. This is why as a best practice for javascript programmer it is always vital to use global variables carefully and never forget to either null it or reassign it after their use. In above example set the global variable a to null after the function call. Another way is to use ‘strict’ mode for parsing your JS code. This will prevent creation of undeclared accidental global variables. Another way is to use ‘let’ instead of ‘var’ for variable declaration. Let has a block scope. Its scope is limited to a block, a statement, or an expression. This is unlike the var keyword, which defines a variable globally.


2. **Closures**
A closure is a combination of a function and the lexical environment within which that function was declared. A closure is an inner(enclosed) function that has access to the outer (enclosing) function’s variables(scope). Also the inner function will continue to have access to the outer function’s scope even after the outer function is executed.

A memory leak occurs in a closure if a variable is declared in outer function becomes automatically available to the nested inner function and continues to reside in memory even if it is not being used/referenced in the nested function.

