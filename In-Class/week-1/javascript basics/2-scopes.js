'use strict';

// when we standardized ES5, we fixed some issues
// but you have to opt-in with 'use strict' so that old code
// can still work the old way.

// you can opt-in on a per-function basis, or on the whole file.

// until ES6 we have two scopes in JS:
// 1. global scope
// 2. function scope
function f(x)
{
    if (true){
        var n = 'hello';
    }
    return n;
    // this will return n, as unlike other languages, if statements do not have
    // a scope.
    // the variables are 'hoisted', which means that calling the variable at
    // the bottom of a function is just as if you had called it from the top.
    // except in ES6 which has block scope if we use let instead of var.

    // without strict mode, you can call a variable with var inside a function to
    //make that variables scope global.
}
// in general, strict mode turns silently thrown-away errors into real 
// thrown errors.

// if assignments fail, thats a thrown error.

// javascript does have an exception throwing and handling

// ES6 added block scope
// when you use "var", it's function scope (or global)
// when you use let or const, it's block scope (or global)

// always use let or const, not var.
const obj = {
    name: 'Nick'
};

obj.bla = 'hey';
// not an error, const only protects the variable itself.
console.log(obj)

let name = 'Bill'
let age = 50;

let bill = {
    name: name,
    age: age
};

bill = {name, age};
// ES6 introduced the following.