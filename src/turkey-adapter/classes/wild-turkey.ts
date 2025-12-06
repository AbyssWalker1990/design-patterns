import { TurkeyInterface } from "../interfaces/turkey.interface";

export class WildTurkey implements TurkeyInterface {
  public gobble(): void {
    console.log("Gobble Gobble!");
  }

  public fly(): void {
    console.log("I am flying a short distance!");
  }
}
