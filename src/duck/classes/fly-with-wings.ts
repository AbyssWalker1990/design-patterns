import type { FlyBehaviorInterface } from "../interfaces/fly-behavior.interface";

export class FlyWithWings implements FlyBehaviorInterface {
  fly() {
    console.log("I can FLY!!!");
  }
}
