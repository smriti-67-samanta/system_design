
class Duck {
    swim(): void {
        console.log("I know swimming");
    }
}

class MallardDuck extends Duck {
   
}


class Bird {
    fly(): void {
        console.log("I can fly");
    }
}

class Penguin extends Bird {
    fly(): void {
        console.log("I cannot fly");
    }
}


interface IDuck {
    swim(): void;
    fly(): void;
    sound(): void;
}

class ToyDuck implements IDuck {
    fly(): void {
        console.log("Cannot fly");
    }
    
    sound(): void {
        console.log("Cannot sound");
    }
    
    swim(): void {
        console.log("Can float on water");
    }
}


function demonstrateAll() {
    console.log("=== Q1: Basic Inheritance ===");
    const mallard = new MallardDuck();
    mallard.swim();
    
    console.log("\n=== Q2: Method Overriding ===");
    const bird = new Bird();
    const penguin = new Penguin();
    bird.fly();
    penguin.fly();
    
    console.log("\n=== Q3: Interface Implementation ===");
    const toyDuck = new ToyDuck();
    toyDuck.fly();
    toyDuck.sound();
    toyDuck.swim();
}


demonstrateAll();