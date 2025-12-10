import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuItem } from "./menu-item";

export class Waitress {
  constructor(
    private readonly menusIterator: IteratorInterface<
      IteratorInterface<MenuItem>
    >
  ) {}

  public printMenu(): void {
    while (this.menusIterator.hasNext()) {
      const menuIterator = this.menusIterator.next();
      this.printMenuIterator(menuIterator);
    }
  }

  private printMenuIterator(iterator: IteratorInterface<MenuItem>): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(`${menuItem.getName()}, `);
      console.log(`${menuItem.getPrice()}`);
      console.log(`${menuItem.getDescription()}.\n --`);
    }
  }
}
