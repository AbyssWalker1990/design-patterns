import { ObserverInterface } from "../../interfaces/observer.interface";
import { QuackableInterface } from "../../interfaces/quackable.interface";
import { Observable } from "../observable";

export class QuackCounterDecorator implements QuackableInterface {
  private static numberOfQuacks = 0;
  private observable: Observable;

  constructor(private readonly duck: QuackableInterface) {
    this.observable = new Observable(this);
  }

  public quack(): void {
    this.duck.quack();
    QuackCounterDecorator.numberOfQuacks++;
    this.notifyObservers();
  }

  public getName(): string {
    // delegate to the wrapped duck so observers see the underlying name
    return this.duck.getName();
  }

  registerObserver(observer: ObserverInterface): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public static getQuacks(): number {
    return QuackCounterDecorator.numberOfQuacks;
  }
}
