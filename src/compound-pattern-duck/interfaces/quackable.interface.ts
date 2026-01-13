import { QuackObservableInterface } from "./quack-observable.interface";

export interface QuackableInterface extends QuackObservableInterface {
  quack(): void;
}
