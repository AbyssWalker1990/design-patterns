import { MenuComposite } from "./menu-composite";
import { MenuItem } from "./menu-item";

export class PancakeHouseMenuComposite extends MenuComposite {
  constructor() {
    super("PANCAKE HOUSE MENU", "Breakfast");
    this.add(
      new MenuItem("Pancake Breakfast", "Pancakes with eggs", true, 2.99)
    );
    this.add(
      new MenuItem(
        "Blueberry Pancakes",
        "Pancakes with blueberries",
        true,
        3.49
      )
    );
    this.add(
      new MenuItem(
        "Waffles",
        "Waffles with your choice of blueberries or strawberries",
        true,
        3.59
      )
    );
    this.add(
      new MenuItem(
        "Regular Pancake Breakfast",
        "Pancakes with fried eggs and sausage",
        false,
        2.99
      )
    );
  }
}
