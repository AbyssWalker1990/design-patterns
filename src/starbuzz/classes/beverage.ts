import { BeverageSizesEnum } from "../enums/beverage-sizes.enum";

export abstract class Beverage {
  protected size: BeverageSizesEnum = BeverageSizesEnum.MD;
  protected description: string = "Unknown Beverage";

  public getDescription() {
    return this.description;
  }

  public setSize(size: BeverageSizesEnum): void {
    this.size = size;
  }

  public getSize(): BeverageSizesEnum {
    return this.size;
  }

  public abstract cost(): number;
}
