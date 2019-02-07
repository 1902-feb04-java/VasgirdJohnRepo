'use strict';

console.log('Hello JS')

var x;

console.log('value of x: ' + x);
console.log('type of x: ' + typeof(x));

x = 10;
x = 10.01;
// in JS, integers and decimal numbers have the same type
// our internal respresentation is basically "double"
// (64-bit IEEE floating-point)

x = Infinity;
x = -Infinity;
x = 5 / 'abc'; // NaN
console.log('value of x: ' + x);
console.log('type of x: ' + typeof(x));

x = 'hello';
// single quotes or double quotes are the same.
x = x[0];

x = true;
x = (2==1) || true;

x = {
    name: 'Bill',
    age: 30,
};
// can access with x.age or x['age'];
x.something = 120;
x['bla'] = 'bla';

// functions (still type object)
// in JS, function are first-class objects.
x.myfunc = function(n) {return n;}
// ^^^^^^^^^^^^^^^^^^ function expression
x = null;
// type of lies and says its object.

//undefined means "non-initialized variable"
// null means "no object here";

// type symbol (new in ES6)
// used for unique identifiers

// JS only has these types number, string, boolean, object, undefined, null, symbol
console.log(x);
console.log('type of x: ' + typeof(x));

// javascript you dont have to actually end your lines with a semicolon, but 
// not doing so can infer the wrong line ending.

// Javascript has familiar control structures from C, Java

if ('ABC'.length > 1)
{
    console.log('true');
}

for (var i =0; x < 10; x++)
{
    console.log(i);
}
x = [];
x = [1,2,3,'the', null];
console.log(x);
x.forEach(function(y){
    console.log(y);
});
function add(a = 1, b = 2, c = 3){
    console.log(a+b+c);
}
add(10);

// void functions return undefined
debugger;
// a break point to debug.

