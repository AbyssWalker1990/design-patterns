import { DuckInterface } from "../interfaces/duck.interface";

export class MallardDuck implements DuckInterface {
  public fly(): void {
    console.log("I am flying!");
  }

  public quack(): void {
    console.log("Quack!");
  }
}
