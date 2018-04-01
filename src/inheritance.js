

// @Parent Class. Holds all Common/General Information.
class Vehicle {
    
    // Base Constructor.
    // NB: Always Called First when an Instance is Created.
    constructor(licenseNumber) {
        this.licenseNumber = licenseNumber;
        this.gpsEnabled = true;
        console.log("Vehicle constructor");
    }
    
    
    // Parent Method
    start() {
        console.log("Starting Vehicle");
    }
    
    
    // Parent Static Method
    static getCompanyName() {
        console.log("Vehicles Company");
    }
}

// @Child class. Holds Specific Information About itself.
class Drone extends Vehicle {
    
};


// @Child class. Holds Specific Information About itself.
class Car extends Vehicle {
    
    // Inheriting Constructors.
    // You MUST use Super First to call Parent Constructor.
    constructor(licenseNumber) {
        
        // Access a Licence Number Stored in a Parent Constructor.
        // NB: You should Never Define a "this" before super().
        // super() MUST be the first Statement in a constructor body.
        super(licenseNumber); // call Parent constructor First!!
        
        
        // But you can Overwrite Inherited Properties after super();
        // This allows Manipulating Parent General Properties to Child Specifics. 
        this.gpsEnabled = false;
    }
    
    
    // Consuming Parent Method Without Overwriting:
    start() {
        super.start(); // Access Parent Method.
        console.log("Starting Car");
    }
    
    // Static Parent Methods Get Inherited the Same way to Normal Methods.
    static getCompanyName() {
        super.getCompanyName();
        console.log("Cars Company");
    }
};


// Instantiate a Car.
let c = new Car("BV567");

// Now c is an Instance of All the Parents of Car Class;
// i.e. Vehicle and Object.
//console.log(c instanceof Object);


console.log(c.licenseNumber); // BV567
console.log(c.gpsEnabled); // false
c.start(); // Starting Vehicle


// Access A Static Parent or Child Method from a Child Class.
Car.getCompanyName(); 