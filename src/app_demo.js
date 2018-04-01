
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
        // NB: using _propertyName, indicates it's private, use a Getter to 
        // expose it publicly.
        this._id = id;
        this.name = name;
    }
    
    // Create a Static Method Directly on Drone Class
    static getCompany() {
        // NB: You can't access instance properties inside static Methods.
        // e.g. this.name returns undefined.
        console.log("in getCompany Static Method");
    }
    
    moveRotors() {
        return `rotors are moving`;
    }
    
    // Create a Method in a Class
    fly() {
        // NB: Always use "this" keyword with the Property name. e.g. this.id
        console.log(`Drone ${this.id} is flying`);
        
        // Use "this" to invoke other Methods on that Class Instance too.
        console.log(`Drone ${this.id} ${this.moveRotors()}`);
    }
    
    // Getters in a Class.
    // NB: Getters are Properties. Thus accessed without the brackets.
    get id() {
        // Now Expose the private instance property _id.
        return this._id;
    }
    
    // Setters in a Class
    set id(value) {
        this._id = value;
    }
}

// Add a Static Property( e.g. maxHeight ) directly into the Drone Class;
Drone.maxHeight = 2000;

// Create an Instance ( Object ) of Drone Class.
let drone = new Drone("A347", "Flyer");

console.log(typeof drone); // Object
console.log(drone instanceof Drone); // true

// NB: A Setter is invoked when a value is Assigned to the instance property.
drone.id = "P456"; // now id changes from A347 to P456.

console.log(`drone: ${drone.id} ${drone.name}`);

// Access a Static Class Property
console.log(`MaxHeight: ${Drone.maxHeight}`);


// Invoke a Class Method;
drone.fly();


// invoke a Static Class Method;
Drone.getCompany();