import { ObserverInterface } from "../../interfaces/observer.interface";
import { QuackableInterface } from "../../interfaces/quackable.interface";
import { Observable } from "../observable";

export class Flock implements QuackableInterface {
  private quackers: QuackableInterface[] = [];
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public add(quacker: QuackableInterface): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    this.quackers.forEach((iterable) => iterable.quack());
  }

  registerObserver(observer: ObserverInterface): void {
    this.quackers.forEach((quacker) => quacker.registerObserver(observer));
  }

  notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public getName(): string {
    return "Flock";
  }
}
