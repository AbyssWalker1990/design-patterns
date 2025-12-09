import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuItem } from "./menu-item";

export class DinerMenuIterator implements IteratorInterface {
  private items: Map<number, MenuItem>;
  private position: number = 0;

  constructor(items: Map<number, MenuItem>) {
    this.items = items;
  }

  public next(): MenuItem {
    const item = this.items.get(this.position);
    this.position++;

    return item!;
  }

  public hasNext(): boolean {
    return this.items.size > this.position;
  }

  public remove(): void {
    throw new Error("Unsupported operation");
  }
}
