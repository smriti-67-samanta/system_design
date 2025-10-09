"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudDuck = exports.DecoyDuck = exports.RubberDuck = exports.MallardDuck = void 0;
const duck_1 = require("./duck");
const fly_strategies_1 = require("./fly-strategies");
class MallardDuck extends duck_1.Duck {
    constructor() {
        super(new fly_strategies_1.FastFly());
    }
}
exports.MallardDuck = MallardDuck;
class RubberDuck extends duck_1.Duck {
    constructor() {
        super(new fly_strategies_1.NoFly());
    }
}
exports.RubberDuck = RubberDuck;
class DecoyDuck extends duck_1.Duck {
    constructor() {
        super(new fly_strategies_1.NoFly());
    }
}
exports.DecoyDuck = DecoyDuck;
class CloudDuck extends duck_1.Duck {
    constructor() {
        super(new fly_strategies_1.SlowFly());
    }
}
exports.CloudDuck = CloudDuck;
