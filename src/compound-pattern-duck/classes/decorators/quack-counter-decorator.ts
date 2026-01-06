import { QuackableInterface } from "../../interfaces/quackable.interface";

export class QuackCounterDecorator implements QuackableInterface {
  private static numberOfQuacks = 0;

  constructor(private readonly duck: QuackableInterface) {}

  public quack(): void {
    this.duck.quack();
    QuackCounterDecorator.numberOfQuacks++;
  }

  public static getQuacks(): number {
    return QuackCounterDecorator.numberOfQuacks;
  }
}
