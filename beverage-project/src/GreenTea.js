import { Beverage } from './Beverage.js';

// GreenTea class extending Beverage
export class GreenTea extends Beverage {
    getDescription() {
        return "Green Tea";
    }

    getCost() {
        return 40;
    }
}