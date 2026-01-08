import { DuckCall } from "../duck-call";
import { MallardDuck } from "../mallard-duck";
import { ReadHeadDuck } from "../read-head-duck";
import { RubberDuck } from "../rubber-duck";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): MallardDuck;
  public abstract createReadHeadDuck(): ReadHeadDuck;
  public abstract createDuckCall(): DuckCall;
  public abstract createRubberDuck(): RubberDuck;
}
