import { StateInterface } from "../interfaces/state.interface";
import { GumballMachine } from "./gumball-machine";

export class WinnerState implements StateInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  public ejectQuarter(): void {
    console.log("Sorry, you already turned the crank");
  }

  public turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!");
  }

  public dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    } else {
      this.gumballMachine.releaseBall();
      console.log("Tou are a WINNER!!! You have 2 gumballs");
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }

  public refill(): void {}
}
