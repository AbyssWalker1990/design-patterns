import { QuackableInterface } from "../../interfaces/quackable.interface";
import { DuckCall } from "../duck-call";
import { MallardDuck } from "../mallard-duck";
import { ReadHeadDuck } from "../read-head-duck";
import { RubberDuck } from "../rubber-duck";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): QuackableInterface;
  public abstract createReadHeadDuck(): QuackableInterface;
  public abstract createDuckCall(): QuackableInterface;
  public abstract createRubberDuck(): QuackableInterface;
}
