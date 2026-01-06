import { QuackableInterface } from "../interfaces/quackable.interface";

export class DuckCall implements QuackableInterface {
  quack(): void {
    console.log("Kwak");
  }
}
