import { DuckCall } from "./classes/duck-call";
import { MallardDuck } from "./classes/mallard-duck";
import { ReadHeadDuck } from "./classes/read-head-duck";
import { RubberDuck } from "./classes/rubber-duck";
import { QuackableInterface } from "./interfaces/quackable.interface";

const mallardDuck = new MallardDuck();
const readHeadDuck = new ReadHeadDuck();
const duckCall = new DuckCall();
const rubberDuck = new RubberDuck();

const simulate = (duck: QuackableInterface): void => {
  duck.quack();
};

console.log("\nDuck Simulator");

simulate(mallardDuck);
simulate(readHeadDuck);
simulate(duckCall);
simulate(rubberDuck);
