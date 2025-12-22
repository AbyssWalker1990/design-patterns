import { StateInterface } from "../interfaces/state.interface";
import { GumballMachine } from "./gumball-machine";

export class NoQuarterState implements StateInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log("You inserted quarter.");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public ejectQuarter(): void {
    console.log("You haven't inserted quarter yet!");
  }

  public turnCrank(): void {
    console.log("You turned crank, but there is no quarter!");
  }

  public dispense(): void {
    console.log("You need to pay first");
  }
}
