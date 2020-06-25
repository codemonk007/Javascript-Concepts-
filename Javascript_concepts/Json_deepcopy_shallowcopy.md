
### Shallow-Copy
    It is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

```javascript
    let Employee = {name:"gaurav",age:23,gender:"Male"};
    let Employee1 =Employee;
    console.log(Employee);
    console.log(Employee1);

    Employee1.age = 46;

    console.log(Employee);
    console.log(Employee1);
```
    Here the changes will be for both the objects.

    This statement will also change name from original Object, since we have a shallow copy, or a reference to var Employee. This means, you’re losing the original data as well.

### Deep_Copy

    A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.
```javascript
    let Employee = {name:"gaurav",age:23,gender:"Male"};
    let Employee1 = {name:Employee.name,age:Employee.age,gender:Employee.gender};
    console.log(Employee);
    console.log(Employee1);
    Employee1.age = 46;
    console.log(Employee);
    console.log(Employee1);

```
    Now if you change Employee1.name, it will only affect Employee1 Object and not Employee (original)
    There is more way where we can copy Object using Json methods.
```javascript
    let Employee = {name:"gaurav",age:23,gender:"Male"};
    let Employee1 = JSON.parse(JSON.stringify(Employee));
    console.log(Employee);
    console.log(Employee1);
    Employee1.age = 46;
    console.log(Employee);
    console.log(Employee1);
```