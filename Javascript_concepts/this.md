As you probably know, when you define a function and use a variable inside of it, it checks if the variable has been defined in its scope. If it is, it uses it! If not, it checks the enclosing scope for that variable definition. It keeps checking enclosing scopes until it finds the variable or reaches global scope. 

Now, function definitions that are not arrow functions define this for you, implicitly. Thus, they will never check an enclosing scope when you try to use this in their scope (because they find it in their own scope!). Arrow functions do NOT define their own this, so they go to the enclosing scope and look for it just as they would with any variable you try to use in their scope.

arrow function work on lexical scoping 

where as normal functions works on context.