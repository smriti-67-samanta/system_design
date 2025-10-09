var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PolyDuck = /** @class */ (function () {
    function PolyDuck() {
    }
    PolyDuck.prototype.fly = function () {
        console.log("Duck flies");
    };
    return PolyDuck;
}());
var DesiDuck = /** @class */ (function (_super) {
    __extends(DesiDuck, _super);
    function DesiDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DesiDuck.prototype.fly = function () {
        console.log("DesiDuck flies at 10kmph");
    };
    return DesiDuck;
}(PolyDuck));
var VidesiDuck = /** @class */ (function (_super) {
    __extends(VidesiDuck, _super);
    function VidesiDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VidesiDuck.prototype.fly = function () {
        console.log("VidesiDuck flies at 20kmph");
    };
    return VidesiDuck;
}(PolyDuck));
var SmartDuck = /** @class */ (function (_super) {
    __extends(SmartDuck, _super);
    function SmartDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartDuck.prototype.fly = function () {
        console.log("SmartDuck flies at 50kmph");
    };
    return SmartDuck;
}(PolyDuck));
function makeDuckFly(duck) {
    duck.fly();
}
var User = /** @class */ (function () {
    function User(name, role) {
        this.orgCode = "DuckCorp";
        this.name = name;
        this.role = role;
    }
    User.prototype.introduce = function () {
        console.log("I am ".concat(this.name, " from ").concat(this.orgCode));
    };
    return User;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name, "Manager") || this;
    }
    Manager.prototype.getRole = function () {
        console.log(this.role);
    };
    return Manager;
}(User));
console.log("=== L1 Q4: Polymorphism – Duck Family ===");
var desiDuck = new DesiDuck();
var videsiDuck = new VidesiDuck();
var smartDuck = new SmartDuck();
makeDuckFly(desiDuck);
makeDuckFly(videsiDuck);
makeDuckFly(smartDuck);
console.log("\n=== L1 Q5: Access Modifiers Exploration ===");
var user = new User("Daffy", "Employee");
user.introduce();
console.log(user.name);
var manager = new Manager("Bugs");
manager.introduce();
manager.getRole();
