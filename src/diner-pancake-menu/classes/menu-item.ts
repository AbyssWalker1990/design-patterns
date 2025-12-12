import { MenuComponent } from "./menu-component";

export class MenuItem extends MenuComponent {
  constructor(
    public name: string,
    public description: string,
    public isVegetarian: boolean,
    public price: number
  ) {
    super();
  }

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

  public print(): void {
    console.log(` ${this.getName()}, `);
    if (this.isVegetarian) {
      console.log(" (v) ");
    }
    console.log(`${this.getPrice()}`);
    console.log(`${this.getDescription()}.\n --`);
  }
}
