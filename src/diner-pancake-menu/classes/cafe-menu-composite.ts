import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import { CafeMenuIterator } from "./cafe-menu-iterator";
import { Menu } from "./menu";
import { MenuComposite } from "./menu-composite";
import { MenuItem } from "./menu-item";

export class CafeMenuComposite extends MenuComposite {
  constructor() {
    super("CAFE MENU", "Lunch");
    this.add(
      new MenuItem(
        "Veggie Burger and Air Fries",
        "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
        true,
        3.99
      )
    );
    this.add(
      new MenuItem(
        "Soup of the day",
        "A cup of the soup of the day, with a side salad",
        false,
        3.69
      )
    );
    this.add(
      new MenuItem(
        "Burrito",
        "A large burrito, with whole pinto beans, salsa, guacamole",
        true,
        4.29
      )
    );
    this.add(new MenuItem("Coffee", "A cup of coffee", true, 1.99));
  }
}
