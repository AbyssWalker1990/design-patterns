import { QuackableInterface } from "../interfaces/quackable.interface";

export class MallardDuck implements QuackableInterface {
  quack(): void {
    console.log("Quack");
  }
}
