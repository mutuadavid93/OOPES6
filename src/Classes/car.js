

// Import Parent Class Vehicle:
import {Vehicle} from './vehicle.js';


export class Car extends Vehicle {
    
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