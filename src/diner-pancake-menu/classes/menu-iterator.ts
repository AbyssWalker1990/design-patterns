import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuItem } from "./menu-item";

export class MenuIterator
  implements IteratorInterface<IteratorInterface<MenuItem>>
{
  private items: IteratorInterface<MenuItem>[];
  private position: number = 0;

  constructor(items: IteratorInterface<MenuItem>[]) {
    this.items = items;
  }

  public next(): IteratorInterface<MenuItem> {
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
