# Javascript
* It is a runtime, single threaded language
* It runs line by line, and provides error only during runtime
* It has only one call stack.
* Dynamically typed 

## Variables
* Variables are memory locations to store data.

**var** 
* Define
    * it is legacy
    * Provide no error in few cases 
    ``` var a=10
    var a=100
    ```
**let**
* Define
    * It is safe 
    * Helps to store data where it may change often, Eg : Counter variable

**const**
* Define
    * It is also safe and most preferred 
    * It is used when immutation matters.

## Hoisting:
* Hoisting is where a part of code in moved to the top of the code.
* There are 2 phases of running a js file,
    - **Memory Phase** - Creates memory for every available variables and methods. 
    - **Execution Phase** - During this phase the actual execution takes place.
* During the execution phase a part of code will be moved to the top (but not actually moving the code)
    Eg:
``` func();

    function func(){
        console.log("Running....");
    }
```

* This is runs without error even after the function is called before its definition.

## Data Types:
**Primitive**
* They are:
    - number
    - string
    - boolean (true, false)
    - bigint : Used to store larger integer values.
    - undefined : It is the type where the variable is declared but not used.
    - null : Used when we want to intentionally say something does not hold anything.
    - symbol : 

**Referenced**
* They are stored as reference
* They are called as objects.

- Object : They hold mapped values.

## Type coercion:
- It is where, JS converts types automatically.

## Truthy/Falsy
- It is used to tell whether a value is true or false. It is used in conditional statements.

* Truthy values:
    * Non-zero numbers: 42, -1, 3.14
    * Non-empty strings: "hello", "0", " "
    * Objects and arrays: {}, []
    * Functions: function() {}
    * Dates: new Date()
    * Symbols: Symbol()
    * BigInt values other than 0n: 10n

* Falsy values:
    * false
    * 0 (and -0)
    * 0n (BigInt zero)
    * "" (empty string)
    * null
    * undefined
    * NaN
    * document.all (used for backward compatibility)

## Template Literals
* :
    * Template Literals is a feature from ES6 where it enables to write strings in more readable format.
    * It helps to write variables between strings.
    * It also helps to write strings with new line without the use of escape sequences.
        Eg:
        ```
            let str= `Hello,
            ${name}!`
        ```

## Browser vs NodeJS
* They both differ with where they are used. 
* Browser is used to render UI in frontend
* NodeJS is used to run server side programs.


## Functions:
* Functions are piece of code block which helps to easily understand logics and keeps organised.
* There are many types of function.
    - Functional declaration
    - Functional expression
    - Arrow functions

### Functional declaration 
- Functional declaration are normal functions.
- They perform hoisting
- They are used for business logic, as it has more readability
- They exist globally.
```
function logic(){
    .....
}
```

### Functional Expression 
- It is where the function is assigned to a variable. 
- It cannot perform hoisting
- It can be reassinged to another variable
- They are mainly used for performing callbacks
- They exist locally and not globally.Because they are assigned to a variable.
```
let logic = function(){
    .....
}
```

* There are also named functional expressions
    - They are similar to anonymous functional expression

```
let logic=function logic(){
    .....
}
```

**If a function is part of the program’s structure → use declaration.**
**If a function is part of runtime behavior → use expression.**

## Arrow functions:
* They are used to avoid the 'this' behaviour.
* They are used to keep short.
* usually 'this' is used to refer the current object
* Arrow function does not have 'this', so it was helpful to refer this inside another function.
* They do not have their own 'this'. 

Eg: 
```
function task(){
    this.seconds=0;
    settimeout(function(){
        this.seconds++;  
    },1000)
}
```
```
function task(){
    this.seconds=0;
    settimeout(()=>{
        this.seconds++;
    },1000)
}
```

### First-class functions:
* First-class functions are where, functions are tereateed like values.
* Here the funcitons can be stored in a variable, it can be returned and it can be sent as a arguments.

### Higher order functions:
* Higher order function is where, it can get an argument as a function and it can return a function 

### Default paramters 
* Default paramters are values which are taken if no value is passed to a function.
* null is treated as a value.
```
function task(name="Person1"){
    console.log(name);
}
```

### Immutability:
* Immutability is where the value is changed and not the address.
* Strings in JS are always immutable. 
* Arrays are mutable as we can change values in-place.

* To make objects immutable we will be using the spread operator.

```
a=[1,2,3,4]
a=[...a,5]
console.log(a);
```
* Here, the array has a new address and did not modify the original array, so it became immutable.
```
obj={
    name:"Hello",
    age:12
}

obj={
    ...obj,
    age:13
}
```

## Scopes:
* Block scope
* Function scope
* Global scope

    - var : It is functional scope
    - let and const: It is block scoped 
    - Any variable which is declared outside the block or function is a global scope

**Lexical Scope**
* Lexical scope is where the outer function is not destroyed until the inner function is using it.
* They help in Closures.
* JS uses a **chain scope** to find the value. At first it checks the current block and then it checks the parent and then the grandparent etc.

**Closures**
* Lexical scope helps to achieve closure where the outer function kees the lifetime of the variable that was used by inner function until it uses. 
* **Practical uses**:
    * It is used to hide the data outside the method.
    * It helps in achieving abstraction without classes and objects.

    eg:
    ```
    function account(){
    let amount=0;

    return {
        deposit(deposit_amount){
            amount+=deposit_amount
        }
        ,
        withdraw(withdraw_amount){
            if(withdraw_amount > amount){
                console.log("Insufficient balance");
            }
            else{
                amount-=withdraw_amount
            }
        },
        check_balance(){
            console.log(amount);
        }
    }
    }

    const my_account=account();
    my_account.deposit(1000);
    my_account.check_balance();
    my_account.withdraw(200)
    my_account.check_balance();
    ```
## Currying:
* currying is where the no of arguements sent in a function is reduced and it has nested functions in it.
* It helps to achieve partial application program.
* Where we can run a partial part of the function.

Eg:
    
```
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let sum=add(2)(3)(4);
```
* Each function will be returned
```
add(2)(3)

(function(b){
    return function(c){
        return a+b+c;
    }
})(3)
```

## Memoization:
* It is an optimization technique used to not to recalculate a computaion again, instead we will be using it by storing it.

Eg:
Memoization using closure.
```
function square(n){
    return n*n;
}
function memoized(fn){
    let cache={}
    return function(a){
        if(cache[a]){
            console.log("Found in cache already");
            console.log(cache[a]);
        }
        else{
            let num=fn(a);
            cache[num]=num;
            console.log("Created cache")
            console.log(num)
        }
    }
}

memoized(square)(4)
memoized(square)(4)
memoized(square)(1)
memoized(square)(2)
```

## Execution Model:
* Exxecution model is where it explain how js works.

### Execution context:
* Execution context is where it is created for each function call.
    * Global execution context
    * Functional execution context
* At each context there is 2 phases,
    * **Memory creation phase**: where variables and functions are allocated with memory 
    * **Execution phase** : It is where the execution takes place.

### Variable Environment:
* It is a place where the variables and functions live inside an execution context.