import { QuackableInterface } from "../interfaces/quackable.interface";

export class ReadHeadDuck implements QuackableInterface {
  quack(): void {
    console.log("Quack");
  }
}
