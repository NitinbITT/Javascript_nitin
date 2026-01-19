# Execution Model:
* JS has 3 places 
    - queue
    - call stack
    - memory
* JS undergoes 2 steps on running,
    - memory creation :Memory is allocated for every function and variables
    - Execution phase : In this phase the program gets executed.

## Execution context:
* execution context is where it hold variables, functions ,scope and 'this'
* There are 2 types,
    - Global execution context : They are created once, and they contain global variables and functions.
    - Function execution context: They contain local variables and functions inside that function.
* At each execution context the memory phase and execution phase takes place.

### Variable Environment: 
* It is where the variables and functions of a function is stored.
* Each execution context has its own variable environment.

### Event Loop:
   * Event loop tells which function to execute now.
   * It keeps the call stack clean. 
   * It ensures every task and work is done.
   * It maintains a loop in checking all executed function.  

**Call Stack**
* In the call stack there will be the functions which are called.
* It tells which function is executing currently

* synchronous function are sent to call stack
* async functions are sent to browsers and comes back from queues

## MicroTask:
* Contains high priority task like 
    * promise.then
    * async/await
    * queueMicrotask

## Macrotask:
* Contains low prioriy task like,
    * settimeout
    * setinterval

**Execution Priority:**
1. Empty call stack
2. Push each microtask in call task
3. repeat
4. After completing microtask, move to macrotask
5. push each macrotask to call stack.
6. Perform until call stack is empty

## Arrays:
* there are 2 type of methods
    * mutating : methods that modify the array.Eg: push,pop etc
    * non-mutating : methids that create new array.Eg: concat,filter,map etc.
    
# Objects:
* Objects are a way of storing key-value pair.
* Simialr data is stored in objects.

**ways of creating an object :**
* by using object()
* by using object literal
* by using class -> safest way to create an object

## Accessing an object:
* An object can be accessed by using the . operator and the bracket operator.
* JS objects converts key automatically to strings
Eg:
```
let obj={
    name:"Alex",
    age:12
}

console.log(obj.name)
console.log(obj[name]) // not possible because name is not a variable.
```

**Reference in Object:**
* Objects store values based on reference and not value.
```
Eg:
let obj={
    name:"Alex"
    age:12
}

let obj2={
    name:"Alex"
    age=12
}

if(obj1===obj2) // false
```

```
obj1=obj2
if(obj1===obj2)  //true
```

**Shallow copy:**
```
obj2={...obj2}
```

**Deep copy:**
```
obj2=JSON.parse(JSON.Stringyfy{obj1})
```

### Object.freeze():
* It is used make an object immutable.
* It is stricter than seal().
* Cannot modify, add or delete a property
eg:
```
obj={
    name:"Alex"
    age:12
}
object.freeze(obj)
```

### Object.seal():
   * It is where it enables us to only change the existing values. 

* Both freeze() and seal perform only shallow.

### Rest and spread:
* Spread is used to create an object with new reference.
* rest operator always comes at last of destructuring.
* rest operator is used to get the remaining values.