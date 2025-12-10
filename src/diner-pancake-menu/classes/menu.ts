import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuInterface } from "../interfaces/menu.interface";
import { CafeMenu } from "./cafe-menu";
import { DinerMenu } from "./diner-menu";
import { MenuItem } from "./menu-item";
import { MenuIterator } from "./menu-iterator";
import { PancakeHouseMenu } from "./pancake-house-menu";

export class Menu implements MenuInterface<IteratorInterface<MenuItem>> {
  private items: IteratorInterface<MenuItem>[] = [];

  constructor() {
    this.addItem(new PancakeHouseMenu());
    this.addItem(new DinerMenu());
    this.addItem(new CafeMenu());
  }

  private addItem(menu: MenuInterface<MenuItem>): void {
    this.items.push(menu.createIterator());
  }

  public createIterator(): IteratorInterface<IteratorInterface<MenuItem>> {
    return new MenuIterator(this.items);
  }
}
