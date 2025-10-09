"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const duck_1 = require("./duck");
const fly_strategies_1 = require("./fly-strategies");
const duck_types_1 = require("./duck-types");
class DuckSimulator {
    static run() {
        console.log("=== 🦆 Duck Behavior Simulator ===\n");
        console.log("1. BASIC STRATEGY PATTERN DEMO:");
        console.log("--------------------------------");
        const duck = new duck_1.Duck(new fly_strategies_1.FastFly());
        duck.performFly();
        duck.setFlyStrategy(new fly_strategies_1.NoFly());
        duck.performFly();
        console.log("\n2. DYNAMIC BEHAVIOR CHANGES:");
        console.log("----------------------------");
        duck.setFlyStrategy(new fly_strategies_1.SlowFly());
        duck.performFly();
        duck.setFlyStrategy(new fly_strategies_1.JetFly());
        duck.performFly();
        duck.setFlyStrategy(new fly_strategies_1.FastFly());
        duck.performFly();
        console.log("\n3. SPECIALIZED DUCK TYPES:");
        console.log("--------------------------");
        const mallard = new duck_types_1.MallardDuck();
        console.log("Mallard Duck:");
        mallard.performFly();
        const rubberDuck = new duck_types_1.RubberDuck();
        console.log("Rubber Duck:");
        rubberDuck.performFly();
        const cloudDuck = new duck_types_1.CloudDuck();
        console.log("Cloud Duck:");
        cloudDuck.performFly();
        console.log("\n4. RUNTIME BEHAVIOR MODIFICATION:");
        console.log("---------------------------------");
        console.log("Making Rubber Duck fly:");
        rubberDuck.setFlyStrategy(new fly_strategies_1.JetFly());
        rubberDuck.performFly();
        console.log("Making Cloud Duck fast:");
        cloudDuck.setFlyStrategy(new fly_strategies_1.FastFly());
        cloudDuck.performFly();
        console.log("\n5. CURRENT STRATEGIES:");
        console.log("----------------------");
        console.log(`Generic Duck: ${duck.getCurrentStrategy()}`);
        console.log(`Mallard Duck: ${mallard.getCurrentStrategy()}`);
        console.log(`Rubber Duck: ${rubberDuck.getCurrentStrategy()}`);
        console.log(`Cloud Duck: ${cloudDuck.getCurrentStrategy()}`);
    }
    static demoAdvancedFeatures() {
        console.log("\n=== 🚀 ADVANCED FEATURES ===");
        console.log("Creating a duck that can change abilities dynamically:\n");
        const superDuck = new duck_1.Duck(new fly_strategies_1.NoFly());
        console.log("Super Duck starts as:");
        superDuck.performFly();
        const strategies = [new fly_strategies_1.FastFly(), new fly_strategies_1.SlowFly(), new fly_strategies_1.JetFly(), new fly_strategies_1.NoFly()];
        const strategyNames = ["FastFly", "SlowFly", "JetFly", "NoFly"];
        strategies.forEach((strategy, index) => {
            console.log(`\nTransforming to ${strategyNames[index]}...`);
            superDuck.setFlyStrategy(strategy);
            superDuck.performFly();
        });
    }
}
DuckSimulator.run();
DuckSimulator.demoAdvancedFeatures();
console.log("\n=== ✅ Simulation Complete ===");
