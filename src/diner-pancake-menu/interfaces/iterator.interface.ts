import { MenuItem } from "../classes/menu-item";

export interface IteratorInterface {
  hasNext(): boolean;
  next(): MenuItem;
  remove(): void;
}
