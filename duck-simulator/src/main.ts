import { Duck } from './duck';
import { FastFly, NoFly, SlowFly, JetFly } from './fly-strategies';
import { MallardDuck, RubberDuck, CloudDuck } from './duck-types';

class DuckSimulator {
    static run(): void {
        console.log("=== 🦆 Duck Behavior Simulator ===\n");

      
        console.log("1. BASIC STRATEGY PATTERN DEMO:");
        console.log("--------------------------------");
        
        const duck = new Duck(new FastFly());
        duck.performFly(); 
        
        duck.setFlyStrategy(new NoFly());
        duck.performFly(); 

      
        console.log("\n2. DYNAMIC BEHAVIOR CHANGES:");
        console.log("----------------------------");
        
        duck.setFlyStrategy(new SlowFly());
        duck.performFly();
        
        duck.setFlyStrategy(new JetFly());
        duck.performFly();
        
        duck.setFlyStrategy(new FastFly());
        duck.performFly();

       
        console.log("\n3. SPECIALIZED DUCK TYPES:");
        console.log("--------------------------");
        
        const mallard = new MallardDuck();
        console.log("Mallard Duck:");
        mallard.performFly();
        
        const rubberDuck = new RubberDuck();
        console.log("Rubber Duck:");
        rubberDuck.performFly();
        
        const cloudDuck = new CloudDuck();
        console.log("Cloud Duck:");
        cloudDuck.performFly();

       
        console.log("\n4. RUNTIME BEHAVIOR MODIFICATION:");
        console.log("---------------------------------");
        
        console.log("Making Rubber Duck fly:");
        rubberDuck.setFlyStrategy(new JetFly());
        rubberDuck.performFly();
        
        console.log("Making Cloud Duck fast:");
        cloudDuck.setFlyStrategy(new FastFly());
        cloudDuck.performFly();

       
        console.log("\n5. CURRENT STRATEGIES:");
        console.log("----------------------");
        console.log(`Generic Duck: ${duck.getCurrentStrategy()}`);
        console.log(`Mallard Duck: ${mallard.getCurrentStrategy()}`);
        console.log(`Rubber Duck: ${rubberDuck.getCurrentStrategy()}`);
        console.log(`Cloud Duck: ${cloudDuck.getCurrentStrategy()}`);
    }

    static demoAdvancedFeatures(): void {
        console.log("\n=== 🚀 ADVANCED FEATURES ===");
        console.log("Creating a duck that can change abilities dynamically:\n");
        
        const superDuck = new Duck(new NoFly());
        console.log("Super Duck starts as:");
        superDuck.performFly();
        
        const strategies = [new FastFly(), new SlowFly(), new JetFly(), new NoFly()];
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