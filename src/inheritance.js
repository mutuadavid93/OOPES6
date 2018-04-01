

// @Parent Class. Holds all Common/General Information.
class Vehicle {
    
    // Base Constructor.
    // NB: Always Called First when an Instance is Created.
    constructor(licenseNumber) {
        this.licenseNumber = licenseNumber;
        console.log("Vehicle constructor");
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
        super(licenseNumber); // call Parent constructor First!!
        console.log("Car constructor");
    }
    
};


// Instantiate a Car.
let c = new Car("BV567");

// Now c is an Instance of All the Parents of Car Class;
// i.e. Vehicle and Object.
//console.log(c instanceof Object);


console.log(c.licenseNumber); // BV567