import { QuackableInterface } from "../../interfaces/quackable.interface";
import { QuackCounterDecorator } from "../decorators/quack-counter-decorator";
import { DuckCall } from "../duck-call";
import { MallardDuck } from "../mallard-duck";
import { ReadHeadDuck } from "../read-head-duck";
import { RubberDuck } from "../rubber-duck";
import { AbstractDuckFactory } from "./abstract-duck-factory";

export class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): QuackableInterface {
    return new QuackCounterDecorator(new MallardDuck());
  }

  public createReadHeadDuck(): QuackableInterface {
    return new QuackCounterDecorator(new ReadHeadDuck());
  }

  public createDuckCall(): QuackableInterface {
    return new QuackCounterDecorator(new DuckCall());
  }

  public createRubberDuck(): QuackableInterface {
    return new QuackCounterDecorator(new RubberDuck());
  }
}
