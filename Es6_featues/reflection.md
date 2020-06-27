ES6 introduces a new global object called Reflect that allows you to call methods, construct objects, get and set properties, manipulate and extend properties.
The Reflect API is important because it allows you to develop programs and frameworks that are able to handle dynamic code.

syntax:
**Reflect.construct(target, args [, newTarget])**
```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let args = ['John', 'Doe'];

let john = Reflect.construct(
    Person,
    args
);

console.log(john instanceof Person);
console.log(john.fullName); // John Doe
```

Calling a function: Reflect.apply()
Prior to ES6, you call a function with a specified this value and arguments by using the Function.prototype.apply() method. For example:
```javascript
let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
console.log(result);
```
It can also be used to define property access in Object.
```javascript
let person = {
    name: 'John Doe'
};

if (Reflect.defineProperty(person, 'age', {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 25,
    })) {
    console.log(person.age);
} else {
    console.log('Cannot define the age property on the person object.');

}
```