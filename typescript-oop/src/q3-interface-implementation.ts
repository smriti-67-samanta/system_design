
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


console.log("Q3: Interface Implementation");
const toyDuck = new ToyDuck();
toyDuck.fly();
toyDuck.sound();
toyDuck.swim();