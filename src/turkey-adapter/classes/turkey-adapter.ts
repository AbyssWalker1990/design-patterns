import { DuckInterface } from "../interfaces/duck.interface";
import { TurkeyInterface } from "../interfaces/turkey.interface";

export class TurkeyAdapter implements DuckInterface {
  constructor(private readonly turkey: TurkeyInterface) {}

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
