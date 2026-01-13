import { ObserverInterface } from "../interfaces/observer.interface";
import { QuackableInterface } from "../interfaces/quackable.interface";
import { Observable } from "./observable";

export class RubberDuck implements QuackableInterface {
  private observable: Observable;
  public name: string = "Rubber Duck";

  constructor() {
    this.observable = new Observable(this);
  }

  quack(): void {
    console.log("Squeek");
    this.notifyObservers();
  }

  public getName(): string {
    return "Rubber Duck";
  }

  registerObserver(observer: ObserverInterface): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
