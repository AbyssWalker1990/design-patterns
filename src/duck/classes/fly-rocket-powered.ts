import { FlyBehaviorInterface } from "../interfaces/fly-behavior.interface";

export class FlyRocketPowered implements FlyBehaviorInterface {
  public fly() {
    console.log("I am flying on the ROCKET!");
  }
}
