'use strict';

// callback functions

function add(a,b, onSuccess)
{
    let result = a + b;
    onSuccess(result);
}
add (1, 2, function(result){
    console.log(result);
});

// makeHTTPRequest(url, function(){
// });

// in ES6, we got a new syntax for function expressions
// called "arrow functions"
add(1, 2, result => console.log(result));

// we can do zero-arg arrow functions like this:

let func = () => 3;

let multiplay = (x,y) => x * y; // take two params, return product
// can aslo do "block body" arrow functions
let max = (x,y) => {
    if (x > y) return x;
    return y;
};

// with block body I use statements seperated by semicolons
// without braces, i provide one expression

// the way "this" works is different with arrow functions.

// regular functions, "this" always refers to whatever object
// to the left of the "." when the function is being called.

let obj = {
    name: 'bob',
    func1: function(){
        console.log(this.name)
    },
    func2: () => console.log(this.name)

}

let obj2 = {
    name: 'Bill',
    func1: obj.func1,
    func2: obj.func2
};
obj2.func1();
obj.func2();

function newCounter(){
    let x = 0;
    return function ()
    {
        x++;
        return x;
    }
}

let counter = newCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// this is using a behavior called "closure"
// be able to explain closure.

// sometimes we call the inner functions themselves
// closures

// IIFE
// immediately-invoked function expression

let library = (function() {
    let privateData = 0;

    function privateFunction()
    {
        return privateData;
    }
    
    return {
        libraryMethod(){
            return
        }
    };
})();
(function () { console.log ('immediately');})();

// not done for security, by being keeping the global namespace uncluttered.
