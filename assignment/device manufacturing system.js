// Step 1: Device Interface (Abstract Product)
class Device {
    specifications() {
        throw new Error("Method 'specifications()' must be implemented");
    }
}

// Step 2: Concrete Apple Devices
class AppleLaptop extends Device {
    specifications() {
        return "Apple Laptop: MacBook Pro, M3 chip, 16GB RAM, 512GB SSD, Retina Display";
    }
}

class ApplePhone extends Device {
    specifications() {
        return "Apple Phone: iPhone 15, A16 Bionic chip, 6GB RAM, 256GB storage, iOS 17";
    }
}

// Step 3: Concrete Samsung Devices
class SamsungLaptop extends Device {
    specifications() {
        return "Samsung Laptop: Galaxy Book3 Pro, Intel i7, 16GB RAM, 1TB SSD, AMOLED display";
    }
}

class SamsungPhone extends Device {
    specifications() {
        return "Samsung Phone: Galaxy S23, Snapdragon 8 Gen 2, 8GB RAM, 256GB storage, Android 13";
    }
}

// Step 4: Abstract Factory Interface
class DeviceFactory {
    createDevice(type) {
        throw new Error("Method 'createDevice()' must be implemented");
    }
}

// Step 5: Concrete Factory for Apple
class AppleFactory extends DeviceFactory {
    createDevice(type) {
        const deviceType = type.toLowerCase();
        
        switch(deviceType) {
            case 'laptop':
                return new AppleLaptop();
            case 'phone':
                return new ApplePhone();
            default:
                throw new Error(`Apple doesn't manufacture ${type} devices`);
        }
    }
}

// Step 6: Concrete Factory for Samsung
class SamsungFactory extends DeviceFactory {
    createDevice(type) {
        const deviceType = type.toLowerCase();
        
        switch(deviceType) {
            case 'laptop':
                return new SamsungLaptop();
            case 'phone':
                return new SamsungPhone();
            default:
                throw new Error(`Samsung doesn't manufacture ${type} devices`);
        }
    }
}

// Step 7: Client Code / Demonstration
class DeviceManufacturingSystem {
    static run() {
        console.log("=== Device Manufacturing System ===\n");
        
        // Create factories
        const appleFactory = new AppleFactory();
        const samsungFactory = new SamsungFactory();
        
        // Create Apple Laptop
        console.log("1. Creating Apple Laptop:");
        try {
            const appleLaptop = appleFactory.createDevice('Laptop');
            console.log(appleLaptop.specifications());
        } catch (error) {
            console.error("Error:", error.message);
        }
        
        console.log();
        
        // Create Samsung Phone
        console.log("2. Creating Samsung Phone:");
        try {
            const samsungPhone = samsungFactory.createDevice('Phone');
            console.log(samsungPhone.specifications());
        } catch (error) {
            console.error("Error:", error.message);
        }
        
        console.log("\n=== Additional Demonstration ===\n");
        
        // Create more devices to show full functionality
        const deviceCreations = [
            { brand: 'Apple', type: 'Phone', factory: appleFactory },
            { brand: 'Samsung', type: 'Laptop', factory: samsungFactory },
            { brand: 'Apple', type: 'Tablet', factory: appleFactory }, // This will error
        ];
        
        deviceCreations.forEach((item, index) => {
            console.log(`${index + 3}. Creating ${item.brand} ${item.type}:`);
            try {
                const device = item.factory.createDevice(item.type);
                console.log(device.specifications());
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
            console.log();
        });
    }
    
    // Alternative demonstration method
    static createAndShowDevice(factory, deviceType) {
        try {
            const device = factory.createDevice(deviceType);
            console.log(device.specifications());
            return device;
        } catch (error) {
            console.error(`Error creating ${deviceType}:`, error.message);
            return null;
        }
    }
}

// Step 8: Run the demonstration
DeviceManufacturingSystem.run();

// Step 9: Alternative way to use the factories
console.log("\n=== Using Factories Directly ===\n");

const appleFactory = new AppleFactory();
const samsungFactory = new SamsungFactory();

console.log("Apple Products:");
console.log("-", appleFactory.createDevice('laptop').specifications());
console.log("-", appleFactory.createDevice('phone').specifications());

console.log("\nSamsung Products:");
console.log("-", samsungFactory.createDevice('laptop').specifications());
console.log("-", samsungFactory.createDevice('phone').specifications());