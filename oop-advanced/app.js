
class PolyDuck {
    fly() {
        console.log("Duck flies");
    }
}

class DesiDuck extends PolyDuck {
    fly() {
        console.log("DesiDuck flies at 10kmph");
    }
}

class VidesiDuck extends PolyDuck {
    fly() {
        console.log("VidesiDuck flies at 20kmph");
    }
}

class SmartDuck extends PolyDuck {
    fly() {
        console.log("SmartDuck flies at 50kmph");
    }
}

function makeDuckFly(duck) {
    duck.fly();
}


class User {
    constructor(name, role) {
        this.name = name; 
        this._orgCode = "DuckCorp"; 
        this._role = role; 
    }
    
    introduce() {
        console.log(`I am ${this.name} from ${this._orgCode}`);
    }
    
    getRole() {
        return this._role;
    }
}

class Manager extends User {
    constructor(name) {
        super(name, "Manager");
    }
    
    showRole() {
        console.log(this.getRole());
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

const manager = new Manager("Bugs");
manager.introduce();
manager.showRole();