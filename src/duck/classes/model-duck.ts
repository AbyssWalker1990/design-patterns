import { Duck } from "./duck";
import { FlyNoWay } from "./fly-no-way";
import { Quack } from "./quack";

export class ModelDuck extends Duck {
  constructor(
    public readonly flyBehavior = new FlyNoWay(),
    public readonly quackBehavior = new Quack()
  ) {
    super(flyBehavior, quackBehavior);
  }

  public display(): void {
    console.log("I'm a Model Duck");
  }
}
