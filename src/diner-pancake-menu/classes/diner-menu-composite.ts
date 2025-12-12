import { MenuComposite } from "./menu-composite";
import { MenuItem } from "./menu-item";

export class DinerMenuComposite extends MenuComposite {
  constructor() {
    super("DINER MENU", "Lunch");
    this.add(new MenuItem("Vegetarian BLT", "Bacon with lettuce", true, 2.99));
    this.add(new MenuItem("BLT", "Bacon with lettuce and tomato", false, 2.99));
    this.add(
      new MenuItem(
        "Soup of the day",
        "Soup with a side of potato salad",
        false,
        3.29
      )
    );
    this.add(
      new MenuItem(
        "Hotdog",
        "A hot dog with sauerkraut and relish",
        false,
        3.05
      )
    );
  }
}
