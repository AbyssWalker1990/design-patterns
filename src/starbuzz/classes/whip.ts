import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment.decorator";

export class Whip extends CondimentDecorator {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 0.1],
    [BeverageSizesEnum.MD, 0.15],
    [BeverageSizesEnum.LG, 0.2],
  ]);

  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  public cost(): number {
    return this.beverage.cost() + (this.sizesToPriceMap.get(this.size) ?? 0);
  }
}
