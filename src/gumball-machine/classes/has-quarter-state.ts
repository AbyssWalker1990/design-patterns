import { StateInterface } from "../interfaces/state.interface";
import { GumballMachine } from "./gumball-machine";

export class HasQuarterState implements StateInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  private get randomWinner(): boolean {
    return Math.random() < 0.1 && this.gumballMachine.getCount() > 1;
  }

  public insertQuarter(): void {
    console.log("You can not insert another quarter");
  }

  public ejectQuarter(): void {
    console.log("Quarter returned!");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public turnCrank(): void {
    console.log("You turned...");
    if (this.randomWinner) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  public dispense(): void {
    console.log("No gumball dispensed");
  }

  public refill(): void {}
}
