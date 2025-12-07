import { DuckInterface } from "../interfaces/duck.interface";
import { TurkeyInterface } from "../interfaces/turkey.interface";

export class DuckAdapter implements TurkeyInterface {
  constructor(private readonly duck: DuckInterface) {}

  public gobble(): void {
    this.duck.quack();
  }

  public fly(): void {
    this.duck.fly();
  }
}
