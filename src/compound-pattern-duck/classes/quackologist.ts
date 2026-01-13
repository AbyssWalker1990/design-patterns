import { ObserverInterface } from "../interfaces/observer.interface";
import { QuackObservableInterface } from "../interfaces/quack-observable.interface";

export class Quackologist implements ObserverInterface {
  public update(duck: QuackObservableInterface) {
    console.log(`Quackologist: ${duck.getName()} just QUACKED!!!`);
  }
}
