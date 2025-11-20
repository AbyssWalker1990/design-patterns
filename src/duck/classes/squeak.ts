import type { QuackBehaviorInterface } from "../interfaces/quack-behavior.interface";

export class Squeak implements QuackBehaviorInterface {
  quack(): void {
    console.log("Squeeeeeeeeak");
  }
}
