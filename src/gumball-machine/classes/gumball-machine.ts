import { StateInterface } from "../interfaces/state.interface";
import { HasQuarterState } from "./has-quarter-state";
import { NoQuarterState } from "./no-quarter-state";
import { SoldOutState } from "./sold-out-state";
import { SoldState } from "./sold-state";
import { WinnerState } from "./winner-state";

export class GumballMachine {
  private noQuarterState: NoQuarterState;
  private hasQuarterState: HasQuarterState;
  private soldState: SoldState;
  private soldOutState: SoldOutState;
  private winnerState: WinnerState;

  private state: StateInterface;
  private count: number;

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;

    if (this.count > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
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

  public getHasQuarterState(): HasQuarterState {
    return this.hasQuarterState;
  }

  public getSoldOutState(): SoldOutState {
    return this.soldOutState;
  }

  public getSoldState(): SoldState {
    return this.soldState;
  }

  public getWinnerState(): WinnerState {
    return this.winnerState;
  }

  public refill(count: number): void {
    this.count += count;
    console.log(
      `The gumball machine was just refilled; its new count is: ${this.count}`
    );
    this.state.refill();
  }

  public toString(): string {
    return `

------ GUMBALL MACHINE --------
    State: ${this.state.constructor.name}
    Count: ${this.count}

    `;
  }
}
