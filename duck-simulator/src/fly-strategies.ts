


export interface FlyStrategy {
    fly(): void;
}


export class FastFly implements FlyStrategy {
    fly(): void {
        console.log("Flying fast like a rocket!");
    }
}

export class NoFly implements FlyStrategy {
    fly(): void {
        console.log("I cannot fly");
    }
}

export class SlowFly implements FlyStrategy {
    fly(): void {
        console.log("Flying slowly and gracefully...");
    }
}

export class JetFly implements FlyStrategy {
    fly(): void {
        console.log("Zoom! Jet-powered flying!");
    }
}