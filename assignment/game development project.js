// GameCharacter class implementing Prototype Pattern
class GameCharacter {
    constructor(name, level, weapon) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }

    // Clone method to create a copy of the character
    clone() {
        // Create a new instance with the same properties
        return new GameCharacter(
            this.name, 
            this.level, 
            this.weapon
        );
    }

    // Optional: Enhanced clone method with custom name
    cloneWithName(newName) {
        const clone = this.clone();
        clone.name = newName;
        return clone;
    }

    // Display character details
    display() {
        console.log(`Character: ${this.name}`);
        console.log(`  Level: ${this.level}`);
        console.log(`  Weapon: ${this.weapon}`);
        console.log(`  Instance ID: ${this.instanceId || 'Not set'}`);
    }
}

// Optional: Enhanced version with instance tracking
class EnhancedGameCharacter extends GameCharacter {
    constructor(name, level, weapon) {
        super(name, level, weapon);
        this.instanceId = Math.random().toString(36).substr(2, 9); // Unique ID
        this.createdAt = new Date();
    }

    // Override clone to include instance ID generation
    clone() {
        const clone = super.clone();
        clone.instanceId = Math.random().toString(36).substr(2, 9);
        clone.createdAt = new Date();
        return clone;
    }
}

// Main function to demonstrate usage
function main() {
    console.log("=== Game Character Prototype Pattern ===\n");

    // Creating original character
    console.log("1. Creating original character:");
    const warrior = new GameCharacter("Warrior", 10, "Sword");
    warrior.display();
    
    console.log("\n2. Cloning the warrior:");
    const warriorClone = warrior.clone();
    warriorClone.name = "Warrior Clone";
    warriorClone.display();
    
    // Verify they are separate instances
    console.log("\n3. Verifying separate instances:");
    console.log(`   Original name: ${warrior.name}`);
    console.log(`   Clone name: ${warriorClone.name}`);
    console.log(`   Are they the same object? ${warrior === warriorClone}`);
    console.log(`   Original level: ${warrior.level}`);
    console.log(`   Clone level: ${warriorClone.level}`);

    // Demonstrate modification independence
    console.log("\n4. Modifying clone independently:");
    warriorClone.level = 15;
    warriorClone.weapon = "Greatsword";
    console.log("   After modifying clone:");
    warrior.display();
    warriorClone.display();

    // Demonstrate multiple clones
    console.log("\n5. Creating multiple clones:");
    const warriorClone2 = warrior.cloneWithName("Warrior Clone 2");
    const warriorClone3 = warrior.cloneWithName("Warrior Clone 3");
    warriorClone2.level = 12;
    warriorClone3.level = 8;
    warriorClone3.weapon = "Dual Swords";
    
    warriorClone2.display();
    warriorClone3.display();

    // Enhanced character example
    console.log("\n=== Enhanced Characters with Instance Tracking ===");
    const mage = new EnhancedGameCharacter("Mage", 5, "Staff");
    const mageClone = mage.cloneWithName("Mage Clone");
    
    console.log("\nOriginal Mage:");
    mage.display();
    console.log("\nMage Clone:");
    mageClone.display();
    
    // Verify they have different instance IDs
    console.log(`\nDifferent instance IDs? ${mage.instanceId !== mageClone.instanceId}`);
    
    // Demonstrate cloning with different weapons
    console.log("\n=== Character Variations ===");
    const archer = new GameCharacter("Archer", 7, "Bow");
    const fireArcher = archer.cloneWithName("Fire Archer");
    fireArcher.weapon = "Flaming Bow";
    
    archer.display();
    fireArcher.display();
}

// Run the program
main();