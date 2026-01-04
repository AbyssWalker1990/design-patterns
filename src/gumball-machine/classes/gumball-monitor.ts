import { GumballMonitorInterface } from "../interfaces/gumball-monitor.interface";
import { GumballMachine } from "./gumball-machine";

export class GumballMonitor implements GumballMonitorInterface {
  constructor(private readonly gumballMachine: GumballMachine) {}

  public async monitor(): Promise<string> {
    return `Location: ${this.gumballMachine.getLocation()}\nCount: ${this.gumballMachine.getCount()}\nState: ${this.gumballMachine.getState()}`;
  }
}
