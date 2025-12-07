import { DuckAdapter } from "./classes/duck-adapter";
import { MallardDuck } from "./classes/mallard-duck";
import { TurkeyAdapter } from "./classes/turkey-adapter";
import { WildTurkey } from "./classes/wild-turkey";
import { DuckInterface } from "./interfaces/duck.interface";
import { TurkeyInterface } from "./interfaces/turkey.interface";

const duck = new MallardDuck();
const turkey = new WildTurkey();

const turkeyAdapter = new TurkeyAdapter(turkey);
const duckAdapter = new DuckAdapter(duck);

const testDuck = (duck: DuckInterface) => {
  duck.quack();
  duck.fly();
};

const testTurkey = (turkey: TurkeyInterface) => {
  turkey.gobble();
  turkey.fly();
};

console.log("The turkey says:");
turkey.gobble();
turkey.fly();

console.log("\nThe duck says:");
testDuck(duck);

console.log("\nThe turkey adapter says:");
testDuck(turkeyAdapter);

console.log("\nThe duck adapter says:");
testTurkey(duckAdapter);
