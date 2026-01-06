import { QuackableInterface } from "../interfaces/quackable.interface";

export class RubberDuck implements QuackableInterface {
  quack(): void {
    console.log("Squeek");
  }
}
