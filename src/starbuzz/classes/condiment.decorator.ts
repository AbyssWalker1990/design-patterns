import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public abstract getDescription(): string;
}
