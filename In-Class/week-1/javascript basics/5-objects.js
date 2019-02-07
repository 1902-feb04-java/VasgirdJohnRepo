'use strict'

let obj = {
    name: 'John',
    behavior: function(n = this.name){
        console.log(n);
    }
};
obj.behavior();

// ES5 has no classes, but it does have constructors
// (we've used boolean, String)

function Person(name = null, age = null, fingers = null)
{
    this.name = name;
    this.age = age;
    this.fingers = fingers;
    this.leave = false;
}
var p = new Person("john", 50, 7);

console.log(p);

// all new does is
//1. make a new empty object {}
// then call the function you put after the
// new with "this" set to that new object.

// ES5 uses prototypal inheritance to have something LIKE
// a "class heirarchy" without classes.

function Student(name, age, fingers, school)
{
    this.school = school;
    this.__proto__ = new Person(name, age, fingers);
}
let s = new Student('mike', 5, 10, 'Uhhhh');

console.log(s);

// In ES6 we can use classes instead of constructors and prototypes

// know the difference between es5 and es6
