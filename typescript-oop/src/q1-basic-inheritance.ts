
class Duck {
    swim(): void {
        console.log("I know swimming");
    }
}


class MallardDuck extends Duck {
   
}


console.log("Q1: Basic Inheritance");
const mallard = new MallardDuck();
mallard.swim(); 
console.log(""); 