// Abstract Beverage class
export class Beverage {
    getDescription() {
        throw new Error("getDescription() must be implemented");
    }

    getCost() {
        throw new Error("getCost() must be implemented");
    }
}