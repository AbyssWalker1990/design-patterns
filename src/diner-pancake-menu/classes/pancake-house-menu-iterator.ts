import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuItem } from "./menu-item";

export class PancakeHouseMenuIterator implements IteratorInterface<MenuItem> {
  private items: MenuItem[];
  private position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  public next(): MenuItem {
    const item = this.items[this.position];
    this.position++;

    return item!;
  }

  public hasNext(): boolean {
    return this.items.length > this.position;
  }

  public remove(): void {
    throw new Error("Unsupported operation");
  }
}
