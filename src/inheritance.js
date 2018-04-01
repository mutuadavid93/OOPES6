

// @Parent Class. Holds all Common/General Information.
class Vehicle {
    
}

// @Child class. Holds Specific Information About itself.
class Drone extends Vehicle {
    
};


// @Child class. Holds Specific Information About itself.
class Car extends Vehicle {
    
};


// Instantiate a Car.
let c = new Car();

// Now c is an Instance of All the Parents of Car Class;
// i.e. Vehicle and Object.
console.log(c instanceof Object);