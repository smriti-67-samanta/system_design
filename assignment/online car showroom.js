// Car class
class Car {
    constructor(brand, engine, color, sunroof, automaticTransmission) {
        this.brand = brand;
        this.engine = engine;
        this.color = color;
        this.sunroof = sunroof;
        this.automaticTransmission = automaticTransmission;
    }

    // Method to display car details
    displayDetails() {
        console.log(`Car Details:
        Brand: ${this.brand}
        Engine: ${this.engine}
        Color: ${this.color}
        Sunroof: ${this.sunroof ? 'Yes' : 'No'}
        Transmission: ${this.automaticTransmission ? 'Automatic' : 'Manual'}
        `);
    }

    // Alternative method to get car details as string
    getDetails() {
        return {
            brand: this.brand,
            engine: this.engine,
            color: this.color,
            sunroof: this.sunroof,
            automaticTransmission: this.automaticTransmission
        };
    }
}

// CarBuilder class
class CarBuilder {
    constructor() {
        this.brand = '';
        this.engine = '';
        this.color = '';
        this.sunroof = false;
        this.automaticTransmission = false;
    }

    // Set brand
    setBrand(brand) {
        this.brand = brand;
        return this; // Return this for method chaining
    }

    // Set engine
    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    // Set color
    setColor(color) {
        this.color = color;
        return this;
    }

    // Set sunroof
    setSunroof(hasSunroof) {
        this.sunroof = hasSunroof;
        return this;
    }

    // Set transmission
    setAutomaticTransmission(isAutomatic) {
        this.automaticTransmission = isAutomatic;
        return this;
    }

    // Build method to create the final Car object
    build() {
        return new Car(
            this.brand,
            this.engine,
            this.color,
            this.sunroof,
            this.automaticTransmission
        );
    }
}

// Main function to demonstrate usage
function main() {
    console.log("=== Online Car Showroom ===\n");
    
    // Create a Tesla Model S using the Builder Pattern
    const teslaModelS = new CarBuilder()
        .setBrand("Tesla Model S")
        .setEngine("Electric")
        .setColor("Black")
        .setSunroof(true)
        .setAutomaticTransmission(true)
        .build();
    
    console.log("Customized Tesla Model S:");
    teslaModelS.displayDetails();
    
    // Demonstrate building another car (example)
    console.log("Another example - Basic Sedan:");
    const basicSedan = new CarBuilder()
        .setBrand("Toyota Camry")
        .setEngine("V6")
        .setColor("White")
        .setSunroof(false)
        .setAutomaticTransmission(true)
        .build();
    
    basicSedan.displayDetails();
    
    // Demonstrate partial customization (optional properties)
    console.log("Partial customization - Sports Car:");
    const sportsCar = new CarBuilder()
        .setBrand("Porsche 911")
        .setEngine("Turbocharged")
        .setColor("Red")
        .build(); // Note: sunroof and transmission use default values
    
    sportsCar.displayDetails();
}

// Run the program
main();