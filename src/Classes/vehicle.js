


export class Vehicle {
    
    // Base Constructor.
    // NB: Always Called First when an Instance is Created.
    constructor(licenseNumber) {
        this.licenseNumber = licenseNumber;
        this.gpsEnabled = true;
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