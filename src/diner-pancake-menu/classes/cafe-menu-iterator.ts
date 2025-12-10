import { IteratorInterface } from "../interfaces/iterator.interface";
import { MenuItem } from "./menu-item";

export class CafeMenuIterator implements IteratorInterface<MenuItem> {
  private iterator: Iterator<MenuItem>;
  private current: IteratorResult<MenuItem>;

  constructor(items: Set<MenuItem>) {
    this.iterator = items.values();
    this.current = this.iterator.next();
  }

  public next(): MenuItem {
    const item = this.current.value;
    this.current = this.iterator.next();
    return item;
  }

  public hasNext(): boolean {
    return !this.current.done;
  }

  public remove(): void {
    throw new Error("Unsupported operation");
  }
}
