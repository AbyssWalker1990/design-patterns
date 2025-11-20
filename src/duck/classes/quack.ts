import type { QuackBehaviorInterface } from "../interfaces/quack-behavior.interface.js";

export class Quack implements QuackBehaviorInterface {
  quack(): void {
    console.log("Normal Quack");
  }
}
