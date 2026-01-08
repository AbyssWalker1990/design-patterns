import { QuackableInterface } from "../../interfaces/quackable.interface";

export class Flock implements QuackableInterface {
  private quackers: QuackableInterface[] = [];

  public add(quacker: QuackableInterface): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    const iterator = this.quackers[Symbol.iterator]();
    iterator.forEach((iterable) => iterable.quack());
  }
}
