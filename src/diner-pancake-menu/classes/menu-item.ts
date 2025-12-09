export class MenuItem {
  constructor(
    public name: string,
    public description: string,
    public isVegetarian: boolean,
    public price: number
  ) {}

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public getIsVegetarian(): boolean {
    return this.isVegetarian;
  }
}
