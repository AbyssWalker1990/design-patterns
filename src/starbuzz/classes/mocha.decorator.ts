import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment.decorator";

export class Mocha extends CondimentDecorator {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 0.15],
    [BeverageSizesEnum.MD, 0.2],
    [BeverageSizesEnum.LG, 0.25],
  ]);

  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  public cost(): number {
    return (
      this.beverage.cost() +
      (this.sizesToPriceMap.get(this.beverage.getSize()) ?? 0)
    );
  }
}
