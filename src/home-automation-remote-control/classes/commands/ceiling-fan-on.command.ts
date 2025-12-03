import { CommandInterface } from "../../interfaces/command.interface";
import { CeilingFanInterface } from "../../interfaces/ceiling-fan.interface";

export class CeilingFanOnCommand implements CommandInterface {
  constructor(private readonly ceilingFan: CeilingFanInterface) {}

  public execute(): void {
    this.ceilingFan.on();
  }
}
