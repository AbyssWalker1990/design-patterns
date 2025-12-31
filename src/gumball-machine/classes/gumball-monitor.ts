import { GumballMachine } from "./gumball-machine";

export class GumballMonitor {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public monitor(): void {
    console.log(`Location: ${this.gumballMachine.getLocation()}`);
    console.log(`Count: ${this.gumballMachine.getCount()}`);
    console.log(`State: ${this.gumballMachine.getState()}`);
  }
}
