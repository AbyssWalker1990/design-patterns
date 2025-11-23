import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";

export class Decaf extends Beverage {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 1.05],
    [BeverageSizesEnum.MD, 1.2],
    [BeverageSizesEnum.LG, 1.25],
  ]);

  constructor() {
    super();
    this.description = "Decaf";
  }

  public cost(): number {
    return this.sizesToPriceMap.get(this.size) ?? 0;
  }
}
