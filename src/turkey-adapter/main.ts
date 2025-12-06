import { MallardDuck } from "./classes/mallard-duck";
import { TurkeyAdapter } from "./classes/turkey-adapter";
import { WildTurkey } from "./classes/wild-turkey";
import { DuckInterface } from "./interfaces/duck.interface";

const duck = new MallardDuck();
const turkey = new WildTurkey();

const turkeyAdapter = new TurkeyAdapter(turkey);

const testDuck = (duck: DuckInterface) => {
  duck.quack();
  duck.fly();
};

console.log("The turkey says:");
turkey.gobble();
turkey.fly();

console.log("\nThe duck says:");
testDuck(duck);

console.log("\nThe turkey adapter says:");
testDuck(turkeyAdapter);
