
class PolyDuck {
    fly(): void {
        console.log("Duck flies");
    }
}

class DesiDuck extends PolyDuck {
    fly(): void {
        console.log("DesiDuck flies at 10kmph");
    }
}

class VidesiDuck extends PolyDuck {
    fly(): void {
        console.log("VidesiDuck flies at 20kmph");
    }
}

class SmartDuck extends PolyDuck {
    fly(): void {
        console.log("SmartDuck flies at 50kmph");
    }
}


function makeDuckFly(duck: PolyDuck): void {
    duck.fly();
}


class User {
    public name: string;         
    private orgCode: string = "DuckCorp"; 
    protected role: string;      

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }
    
    introduce(): void {
        console.log(`I am ${this.name} from ${this.orgCode}`);
       
    }
}

class Manager extends User {
    constructor(name: string) {
        super(name, "Manager");
    }
    
    getRole(): void {
        console.log(this.role); 
       
    }
}

console.log("=== L1 Q4: Polymorphism – Duck Family ===");
const desiDuck = new DesiDuck();
const videsiDuck = new VidesiDuck();
const smartDuck = new SmartDuck();

makeDuckFly(desiDuck);
makeDuckFly(videsiDuck);
makeDuckFly(smartDuck);

console.log("\n=== L1 Q5: Access Modifiers Exploration ===");
const user = new User("Daffy", "Employee");
user.introduce();
console.log(user.name); 

const manager = new Manager("Bugs");
manager.introduce();
manager.getRole();