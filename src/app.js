

// Now Import All the Child Classes:


import {Car} from './Classes/car.js';
import {Drone} from './Classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';


// Instantiate our Data Service
let dataService = new FleetDataService();
dataService.loadData(fleet);

console.log(dataService.cars);