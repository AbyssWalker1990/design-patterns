import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 0.8],
    [BeverageSizesEnum.MD, 0.85],
    [BeverageSizesEnum.LG, 0.9],
  ]);

  constructor() {
    super();
    this.description = "House Blend";
  }

  public cost(): number {
    return this.sizesToPriceMap.get(this.size) ?? 0;
  }
}
