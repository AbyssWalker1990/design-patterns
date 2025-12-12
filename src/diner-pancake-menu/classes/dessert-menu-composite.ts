import { MenuComposite } from "./menu-composite";
import { MenuItem } from "./menu-item";

export class DessertMenuComposite extends MenuComposite {
  constructor() {
    super("DESSERT MENU", "Dessert of course!");
    this.add(
      new MenuItem(
        "Apple Pie",
        "Apple pie with a flakey crust, topped with vanilla ice cream",
        true,
        1.59
      )
    );
    this.add(
      new MenuItem(
        "Cheesecake",
        "Creamy New York cheesecake, with a chocolate graham crust",
        true,
        1.99
      )
    );
    this.add(
      new MenuItem(
        "Sorbet",
        "A scoop of raspberry and a scoop of lime",
        true,
        1.89
      )
    );
  }
}
