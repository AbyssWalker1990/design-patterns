import { StateInterface } from "../interfaces/state.interface";
import { GumballMachine } from "./gumball-machine";

export class SoldOutState implements StateInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public insertQuarter(): void {
    console.log("There are no gumballs");
  }

  public ejectQuarter(): void {
    console.log("You can't eject, you haven't inserted a quarter yet");
  }

  public turnCrank(): void {
    console.log("You turned, but there are no gumballs");
  }

  public dispense(): void {
    console.log("No gumball dispensed");
  }
}
