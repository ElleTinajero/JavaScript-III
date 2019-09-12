/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding gives you access to the window scope or global scope. (self explanatory)
* 2. Implicit Binding gives you access to the object after this. 
* 3. New Binding gives you access to a constructor function's object.
* 4. Explicit Binding works with inheritance and gives you access when you use .call .apply or super?
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const myFunction = function number(11) {
    console.log(this);
    return 11
}

number(11);

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding