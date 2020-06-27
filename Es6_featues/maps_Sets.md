Maps are generally sued to store key value pair in javascript .It is a latest entry to javascript.
Ex:
```javascript
let test=new Map([["test","value"],["test1","value1"],["test2","value2"]])
test.set("test","ganapati")
console.log(test.get("test"))
```
when a group of individual object be stored in a datastruture and all elemnets stored are unique sets are the best option.

```javascript
let test = new Set([1,2,2,4])
test.add(8)
console.log(test);
var getEntriesArry = test.entries(); 
console.log(getEntriesArry); //{ [ 1, 1 ], [ 2, 2 ], [ 4, 4 ], [ 8, 8 ] }
console.log(getEntriesArry.next().value); 
console.log(getEntriesArry.next().value); 
```

