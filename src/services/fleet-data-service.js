

// Class to Manage Cars and Drones.
export class FleetDataService {
    
    constructor() {
        this.cars = [];
        this.drones = [];
    }
    
    
    // Create loadData Method
    loadData(fleet) {
        for(let data of fleet) {
            switch (data.type){
                case 'car':
                    this.cars.push(data);
                    break;
                case 'drone':
                    this.drones.push(data);
                    break;
            }
        }
    }
    
};