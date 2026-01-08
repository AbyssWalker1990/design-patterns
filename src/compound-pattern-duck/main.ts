import { GooseAdapter } from "./classes/adapters/goose-adapter";
import { QuackCounterDecorator } from "./classes/decorators/quack-counter-decorator";
import { CountingDuckFactory } from "./classes/factories/counting-duck-factory";
import { Goose } from "./classes/goose";
import { QuackableInterface } from "./interfaces/quackable.interface";

const duckFactory = new CountingDuckFactory();

const mallardDuck = duckFactory.createMallardDuck();
const readHeadDuck = duckFactory.createReadHeadDuck();
const duckCall = duckFactory.createDuckCall();
const rubberDuck = duckFactory.createRubberDuck();
const gooseDuck = new GooseAdapter(new Goose());

const simulate = (duck: QuackableInterface): void => {
  duck.quack();
};

console.log("\nDuck Simulator");

simulate(mallardDuck);
simulate(readHeadDuck);
simulate(duckCall);
simulate(rubberDuck);
simulate(gooseDuck);

console.log(`The ducks quacked ${QuackCounterDecorator.getQuacks()} times`);
