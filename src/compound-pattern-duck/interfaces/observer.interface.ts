import { QuackObservableInterface } from "./quack-observable.interface";

export interface ObserverInterface {
  update(duck: QuackObservableInterface): void;
}
