import { GooseAdapter } from "./classes/adapters/goose-adapter";
import { DuckCall } from "./classes/duck-call";
import { Goose } from "./classes/goose";
import { MallardDuck } from "./classes/mallard-duck";
import { ReadHeadDuck } from "./classes/read-head-duck";
import { RubberDuck } from "./classes/rubber-duck";
import { QuackableInterface } from "./interfaces/quackable.interface";

const mallardDuck = new MallardDuck();
const readHeadDuck = new ReadHeadDuck();
const duckCall = new DuckCall();
const rubberDuck = new RubberDuck();
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
