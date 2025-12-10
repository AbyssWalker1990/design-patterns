import { IteratorInterface } from "./iterator.interface";

export interface MenuInterface<T> {
  createIterator(): IteratorInterface<T>;
}
