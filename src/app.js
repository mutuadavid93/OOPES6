
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
    constructor(id, name) {
        // "this" refers to the Instance being Created e.g. drone
        // NB: in this.id, the id is an instance property.
        this.id = id;
        this.name = name;
    }
}

// Add a Static Property( e.g. maxHeight ) directly into the Drone Class;
Drone.maxHeight = 2000;

// Create an Instance ( Object ) of Drone Class.
let drone = new Drone("A347", "Flyer");

console.log(typeof drone); // Object
console.log(drone instanceof Drone); // true

console.log(`drone: ${drone.id} ${drone.name}`);

// Access a Static Class Property
console.log(`MaxHeight: ${Drone.maxHeight}`);