import { QuackableInterface } from "../../interfaces/quackable.interface";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): QuackableInterface;
  public abstract createReadHeadDuck(): QuackableInterface;
  public abstract createDuckCall(): QuackableInterface;
  public abstract createRubberDuck(): QuackableInterface;
}
