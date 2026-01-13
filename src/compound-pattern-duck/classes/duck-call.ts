import { ObserverInterface } from "../interfaces/observer.interface";
import { QuackableInterface } from "../interfaces/quackable.interface";
import { Observable } from "./observable";

export class DuckCall implements QuackableInterface {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  quack(): void {
    console.log("Kwak");
    this.notifyObservers();
  }

  public getName(): string {
    return "Duck Call";
  }

  registerObserver(observer: ObserverInterface): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
