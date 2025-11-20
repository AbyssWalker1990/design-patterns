import { Duck } from "./duck";
import { FlyWithWings } from "./fly-with-wings";
import { Quack } from "./quack";

export class MallardDuck extends Duck {
  constructor(
    public readonly flyBehavior = new FlyWithWings(),
    public readonly quackBehavior = new Quack()
  ) {
    super(flyBehavior, quackBehavior);
  }

  public display(): void {
    console.log("I'm a Mallard Duck");
  }
}
