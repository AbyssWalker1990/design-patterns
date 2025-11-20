import type { FlyBehaviorInterface } from "../interfaces/fly-behavior.interface";
import type { QuackBehaviorInterface } from "../interfaces/quack-behavior.interface";

export abstract class Duck {
  constructor(
    public flyBehavior: FlyBehaviorInterface,
    public quackBehavior: QuackBehaviorInterface
  ) {}

  abstract display(): void;

  public swim() {
    console.log("Every duck can SWIM!");
  }

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }
}
