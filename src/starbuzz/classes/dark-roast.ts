import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";
import { Beverage } from "./beverage";

export class DarkRoast extends Beverage {
  private sizesToPriceMap: Map<BeverageSizesEnum, number> = new Map([
    [BeverageSizesEnum.SM, 0.15],
    [BeverageSizesEnum.MD, 0.2],
    [BeverageSizesEnum.LG, 0.25],
  ]);

  constructor() {
    super();
    this.description = "Dark Roast";
  }

  public cost(): number {
    return this.sizesToPriceMap.get(this.size) ?? 0;
  }
}
