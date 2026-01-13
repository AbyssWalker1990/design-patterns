import { ObserverInterface } from "../interfaces/observer.interface";
import { QuackObservableInterface } from "../interfaces/quack-observable.interface";
import { QuackableInterface } from "../interfaces/quackable.interface";
import { Observable } from "./observable";

export class MallardDuck implements QuackableInterface {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  quack(): void {
    console.log("Quack");
    this.notifyObservers();
  }

  public getName(): string {
    return "Mallard Duck";
  }

  registerObserver(observer: ObserverInterface): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
