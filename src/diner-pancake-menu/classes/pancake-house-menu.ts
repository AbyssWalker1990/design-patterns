import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import { MenuItem } from "./menu-item";
import { PancakeHouseMenuIterator } from "./pancake-house-menu-iterator";

export class PancakeHouseMenu implements MenuInterface<MenuItem> {
  private items: MenuItem[] = [];

  constructor() {
    this.addItem("Pancake Breakfast", "Pancakes with eggs", true, 2.99);
    this.addItem("Blueberry Pancakes", "Pancakes with blueberries", true, 3.49);
    this.addItem(
      "Waffles",
      "Waffles with your choice of blueberries or strawberries",
      true,
      3.59
    );
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs and sausage",
      false,
      2.99
    );
  }

  private addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number
  ): void {
    this.items.push(new MenuItem(name, description, isVegetarian, price));
  }

  public createIterator(): IteratorInterface<MenuItem> {
    return new PancakeHouseMenuIterator(this.items);
  }
}
