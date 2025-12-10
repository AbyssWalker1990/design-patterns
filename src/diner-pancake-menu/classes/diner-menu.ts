import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import { DinerMenuIterator } from "./diner-menu-iterator";
import { MenuItem } from "./menu-item";

export class DinerMenu implements MenuInterface<MenuItem> {
  private items: Map<number, MenuItem> = new Map();
  private numberOfItems = 0;

  constructor() {
    this.addItem("Vegetarian BLT", "Bacon with lettuce", true, 2.99);
    this.addItem("BLT", "Bacon with lettuce and tomato", false, 2.99);
    this.addItem(
      "Soup of the day",
      "Soup with a side of potato salad",
      false,
      3.29
    );
    this.addItem("Hotdog", "A hot dog with sauerkraut and relish", false, 3.05);
  }

  private addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number
  ): void {
    this.items.set(
      this.numberOfItems++,
      new MenuItem(name, description, isVegetarian, price)
    );
  }

  public createIterator(): IteratorInterface<MenuItem> {
    return new DinerMenuIterator(this.items);
  }
}
