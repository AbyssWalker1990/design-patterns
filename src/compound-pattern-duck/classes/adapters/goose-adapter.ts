import { ObserverInterface } from "../../interfaces/observer.interface";
import { QuackableInterface } from "../../interfaces/quackable.interface";
import { Goose } from "../goose";
import { Observable } from "../observable";

export class GooseAdapter implements QuackableInterface {
  private goose: Goose;
  private observable: Observable;

  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }

  quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }

  public getName(): string {
    return "Goose (as Duck)";
  }

  registerObserver(observer: ObserverInterface): void {
    this.observable.registerObserver(observer);
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
