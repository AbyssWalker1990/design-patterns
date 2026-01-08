import { GooseAdapter } from "./classes/adapters/goose-adapter";
import { Flock } from "./classes/composites/flock";
import { QuackCounterDecorator } from "./classes/decorators/quack-counter-decorator";
import { CountingDuckFactory } from "./classes/factories/counting-duck-factory";
import { Goose } from "./classes/goose";
import { QuackableInterface } from "./interfaces/quackable.interface";

const duckFactory = new CountingDuckFactory();

const readHeadDuck = duckFactory.createReadHeadDuck();
const duckCall = duckFactory.createDuckCall();
const rubberDuck = duckFactory.createRubberDuck();
const gooseDuck = new GooseAdapter(new Goose());

const flockOfDucks = new Flock();
flockOfDucks.add(readHeadDuck);
flockOfDucks.add(duckCall);
flockOfDucks.add(rubberDuck);
flockOfDucks.add(gooseDuck);

const mallardDuck1 = duckFactory.createMallardDuck();
const mallardDuck2 = duckFactory.createMallardDuck();
const mallardDuck3 = duckFactory.createMallardDuck();
const mallardDuck4 = duckFactory.createMallardDuck();

const flockOfMallards = new Flock();
flockOfMallards.add(mallardDuck1);
flockOfMallards.add(mallardDuck2);
flockOfMallards.add(mallardDuck3);
flockOfMallards.add(mallardDuck4);

const simulate = (duck: QuackableInterface): void => {
  duck.quack();
};

console.log("\nWhole Flock");
simulate(flockOfDucks);
console.log("\nMallard Flock");
simulate(flockOfMallards);

console.log(`The ducks quacked ${QuackCounterDecorator.getQuacks()} times`);
