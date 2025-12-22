import { StateInterface } from "../interfaces/state.interface";
import { NoQuarterState } from "./no-quarter-state";

export class GumballMachine {
  private noQuarterState: NoQuarterState;

  private state: StateInterface;
  private count: number;

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);

    this.count = numberGumballs;

    if (this.count > 0) {
      this.state = this.noQuarterState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
  }

  public dispense(): void {
    this.state.dispense();
  }

  public setState(state: StateInterface): void {
    this.state = state;
  }

  public releaseBall(): void {
    console.log("The gumball is coming into the slot...");
    if (this.count > 0) this.count -= 1;
  }

  public getCount(): number {
    return this.count;
  }

  public getNoQuarterState(): NoQuarterState {
    return this.noQuarterState;
  }
}
