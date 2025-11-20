import type { QuackBehaviorInterface } from "../interfaces/quack-behavior.interface";

export class SilentQuack implements QuackBehaviorInterface {
  quack(): void {
    console.log("SILENT!!!");
  }
}
