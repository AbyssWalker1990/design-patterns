import type { FlyBehaviorInterface } from "../interfaces/fly-behavior.interface";

export class FlyNoWay implements FlyBehaviorInterface {
  fly() {
    console.log("Can not fly :(");
  }
}
