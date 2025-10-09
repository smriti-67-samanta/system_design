"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
class Duck {
    constructor(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }
    performFly() {
        this.flyStrategy.fly();
    }
    setFlyStrategy(flyStrategy) {
        this.flyStrategy = flyStrategy;
        console.log(`Flight behavior changed!`);
    }
    getCurrentStrategy() {
        return this.flyStrategy.constructor.name;
    }
}
exports.Duck = Duck;
