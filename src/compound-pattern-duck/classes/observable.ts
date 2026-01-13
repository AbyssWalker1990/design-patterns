import { ObserverInterface } from "../interfaces/observer.interface";
import { QuackObservableInterface } from "../interfaces/quack-observable.interface";

export class Observable implements QuackObservableInterface {
  private observers: ObserverInterface[] = [];

  constructor(private readonly duck: QuackObservableInterface) {}

  public registerObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.duck));
  }

  public getName(): string {
    return this.duck.getName();
  }
}
