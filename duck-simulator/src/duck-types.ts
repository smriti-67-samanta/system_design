import { Duck } from './duck';
import { FlyStrategy, NoFly, FastFly, SlowFly } from './fly-strategies';


export class MallardDuck extends Duck {
    constructor() {
        super(new FastFly());
    }
}

export class RubberDuck extends Duck {
    constructor() {
        super(new NoFly());
    }
}

export class DecoyDuck extends Duck {
    constructor() {
        super(new NoFly());
    }
}

export class CloudDuck extends Duck {
    constructor() {
        super(new SlowFly());
    }
}