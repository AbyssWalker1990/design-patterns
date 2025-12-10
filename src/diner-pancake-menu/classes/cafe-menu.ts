import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import { CafeMenuIterator } from "./cafe-menu-iterator";
import { MenuItem } from "./menu-item";

export class CafeMenu implements MenuInterface<MenuItem> {
  private items: Set<MenuItem> = new Set();

  constructor() {
    this.addItem(
      "Veggie Burger and Air Fries",
      "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
      true,
      3.99
    );
    this.addItem(
      "Soup of the day",
      "A cup of the soup of the day, with a side salad",
      false,
      3.69
    );
    this.addItem(
      "Burrito",
      "A large burrito, with whole pinto beans, salsa, guacamole",
      true,
      4.29
    );
    this.addItem("Coffee", "A cup of coffee", true, 1.99);
  }

  private addItem(
    name: string,
    description: string,
    isVegetarian: boolean,
    price: number
  ): void {
    this.items.add(new MenuItem(name, description, isVegetarian, price));
  }

  public createIterator(): IteratorInterface<MenuItem> {
    return new CafeMenuIterator(this.items);
  }
}
