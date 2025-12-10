import { IteratorInterface } from "../interfaces/iterator.interface";
import { CafeMenu } from "./cafe-menu";
import { DinerMenu } from "./diner-menu";
import { PancakeHouseMenu } from "./pancake-house-menu";

export class Waitress {
  constructor(
    private readonly dinerMenu: DinerMenu,
    private readonly pancakeHouseMenu: PancakeHouseMenu,
    private readonly cafeMenu: CafeMenu
  ) {}

  public printMenu(): void {
    const pancakeHouseMenuIterator = this.pancakeHouseMenu.createIterator();
    const dinerMenuIterator = this.dinerMenu.createIterator();
    const cafeMenuIterator = this.cafeMenu.createIterator();

    console.log("Menu\n----\nBREAKFAST");
    this.printMenuIterator(pancakeHouseMenuIterator);
    console.log("----\nLUNCH");
    this.printMenuIterator(dinerMenuIterator);
    console.log("----\nDINNER");
    this.printMenuIterator(cafeMenuIterator);
  }

  private printMenuIterator(iterator: IteratorInterface): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.getName()}, `);
      console.log(`${menuItem.getPrice()}`);
      console.log(`${menuItem.getDescription()}.\n --`);
    }
  }
}
