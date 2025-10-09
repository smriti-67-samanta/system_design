import { FlyStrategy } from './fly-strategies';

export class Duck {
    private flyStrategy: FlyStrategy;

   
    constructor(flyStrategy: FlyStrategy) {
        this.flyStrategy = flyStrategy;
    }

    
    performFly(): void {
        this.flyStrategy.fly();
    }

    
    setFlyStrategy(flyStrategy: FlyStrategy): void {
        this.flyStrategy = flyStrategy;
        console.log(`Flight behavior changed!`);
    }

    
    getCurrentStrategy(): string {
        return this.flyStrategy.constructor.name;
    }
}