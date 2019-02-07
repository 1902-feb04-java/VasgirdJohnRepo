'use strict';

function compare(a,b) {
    console.log("a: " + a + ", b: " + b);
    console.log( `a: ${a}, b: ${b}`);
    // you can use backticks (`) instead of quotes
    // and put JS expression inside ${}
    console.log(`a == b ${a==b}`);
    console.log(`a === b: ${a===b}`);
}

compare (1/2,1.0/2);
compare(`1`, 1);
// == double equals is loose (negation: !=)
// === triple equals is strict (negation: !==)

// double equals tries to compare on value without type
// triple equals compares both value and type
compare('', 0);
compare(0, [[]])
compare(NaN, NaN); // not equal by floating point rules.