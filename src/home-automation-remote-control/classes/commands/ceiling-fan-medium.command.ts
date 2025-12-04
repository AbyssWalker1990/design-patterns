import { CommandInterface } from "../../interfaces/command.interface";
import { CeilingFanInterface } from "../../interfaces/ceiling-fan.interface";
import { CeilingFan } from "../appliance/ceiling-fan";

export class CeilingFanMediumCommand implements CommandInterface {
  private prevSpeed: number | null = null;

  constructor(private readonly ceilingFan: CeilingFanInterface) {}

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  public undo(): void {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high();
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low();
    } else {
      this.ceilingFan.off();
    }
  }
}
