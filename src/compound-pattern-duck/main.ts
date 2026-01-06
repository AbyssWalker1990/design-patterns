import { GooseAdapter } from "./classes/adapters/goose-adapter";
import { QuackCounterDecorator } from "./classes/decorators/quack-counter-decorator";
import { DuckCall } from "./classes/duck-call";
import { Goose } from "./classes/goose";
import { MallardDuck } from "./classes/mallard-duck";
import { ReadHeadDuck } from "./classes/read-head-duck";
import { RubberDuck } from "./classes/rubber-duck";
import { QuackableInterface } from "./interfaces/quackable.interface";

const mallardDuck = new QuackCounterDecorator(new MallardDuck());
const readHeadDuck = new QuackCounterDecorator(new ReadHeadDuck());
const duckCall = new QuackCounterDecorator(new DuckCall());
const rubberDuck = new QuackCounterDecorator(new RubberDuck());
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
