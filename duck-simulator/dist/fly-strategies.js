"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JetFly = exports.SlowFly = exports.NoFly = exports.FastFly = void 0;
class FastFly {
    fly() {
        console.log("Flying fast like a rocket!");
    }
}
exports.FastFly = FastFly;
class NoFly {
    fly() {
        console.log("I cannot fly");
    }
}
exports.NoFly = NoFly;
class SlowFly {
    fly() {
        console.log("Flying slowly and gracefully...");
    }
}
exports.SlowFly = SlowFly;
class JetFly {
    fly() {
        console.log("Zoom! Jet-powered flying!");
    }
}
exports.JetFly = JetFly;
