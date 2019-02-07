'use strict';

function convertToBool(x)
{
    let bool = Boolean(x);
    console.log(`${x} as boolean: ${bool}`);
}

// values convert to boolean in if statements.

if (condition)
{

}

// most values convert to true, we call those values "truthy"
// some convert to false, we call them "falsey"

// false values:
// 0 and -0
// '' (empty string)
// false
// null
// undefined

// everything else is truthy, including all objects, functions, arrays
// etc.

// often we use "null" to indicate the absense of an object

let object = getTheObject();

//if this is null, converts to false. if any object, converts to true.

if (object)
{

}
// a set is a collection of objects that doesnt have an order or duplicates
// a set is cheap to add to and to check if an element exists within it.

// map is for

// for-of in ES6