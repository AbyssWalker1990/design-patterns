import { PopcornPopperInterface } from "../interfaces/popcorn-popper.interface";

export class PopcornPopper implements PopcornPopperInterface {
  constructor(private name = "PopcornPopper") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  pop(): void {
    console.log(`${this.name}: popping popcorn`);
  }
}
