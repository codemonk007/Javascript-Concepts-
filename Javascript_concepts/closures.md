### Closures
    A closure is the combination of a function bundled together (enclosed) with references to
    its surrounding state (the lexical environment). In other words, a closure gives you access
    to  an outer function’s scope from an inner function.
```javascript
        let test = function (name) {
        return function (sirname) {
            return name + " " + sirname
        }
    }
    console.log(test("Ganapati")("Bhat"))
```
main Disadvantages of closure
*   Memory cannot be garbage collected as long as it is active
*   So to fix this in your program if there comes a point that you’re done using an element   inside       the closure then you need to set it to null.  
*   creating functions inside other functions lead to duplication in memory, potentially slowing         down the application.
*   Unless you need privacy, its more practical to use the module pattern to create new objects         with     shared methods.