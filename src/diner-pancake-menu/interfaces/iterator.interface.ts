import { MenuItem } from "../classes/menu-item";

export interface IteratorInterface<T> {
  hasNext(): boolean;
  next(): T;
  remove(): void;
}
