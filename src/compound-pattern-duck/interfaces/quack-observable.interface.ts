import { ObserverInterface } from "./observer.interface";

export interface QuackObservableInterface {
  registerObserver(observer: ObserverInterface): void;
  notifyObservers(): void;
  getName(): string;
}
