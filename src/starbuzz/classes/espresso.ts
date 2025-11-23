import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";

export class Espresso extends Beverage {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 1.99],
    [BeverageSizesEnum.MD, 2.49],
    [BeverageSizesEnum.LG, 2.99],
  ]);

  constructor() {
    super();
    this.description = "Espresso";
  }

  public cost(): number {
    return this.sizesToPriceMap.get(this.size) ?? 0;
  }
}
