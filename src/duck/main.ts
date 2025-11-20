import { FlyRocketPowered } from "./classes/fly-rocket-powered";
import { MallardDuck } from "./classes/mallard-duck";
import { ModelDuck } from "./classes/model-duck";

const mallardDuck = new MallardDuck();

console.log("----- Mallard Duck -----");
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();
console.log("----------------------------------");

const modelDuck = new ModelDuck();

console.log("----- Model Duck -----");
modelDuck.display();

modelDuck.setFlyBehavior(new FlyRocketPowered());

modelDuck.performFly();
modelDuck.performQuack();
console.log("----------------------------------");
