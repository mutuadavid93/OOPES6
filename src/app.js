
/*
 * Automatically Modules are Scoped not to Pollute the Global Scope.
 * You can proceed right away writing your Module.
 * like this one. i.e. app.js
 */
let droneId = 5;

// console.log(droneId);



/*
 *  Creating Classes and Objects
 */

// Define a Class,
// @Syntax:
class ClassName {
    
    // details here
    
}


// Stamb out an Object from the Class
let objectVar = new ClassName();



// @Example of a Class:
class Drone {
    
}

// Create an Instance (Object) of Drone Class.
let drone = new Drone();

console.log(typeof drone); // Object
console.log(drone instanceof Drone); // true