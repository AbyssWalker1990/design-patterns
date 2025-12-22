import { StateInterface } from "../interfaces/state.interface";
import { GumballMachine } from "./gumball-machine";

export class HasQuarterState implements StateInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log("You can not insert another quarter");
  }

  public ejectQuarter(): void {
    console.log("Quarter returned!");
  }

  public turnCrank(): void {
    console.log("You turned...");
  }

  public dispense(): void {
    console.log("No gumball dispensed");
  }
}
