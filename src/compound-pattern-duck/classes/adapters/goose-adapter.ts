import { QuackableInterface } from "../../interfaces/quackable.interface";
import { Goose } from "../goose";

export class GooseAdapter implements QuackableInterface {
  private goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
  }

  quack(): void {
    this.goose.honk();
  }
}
