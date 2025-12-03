import { CeilingFanInterface } from "../../interfaces/ceiling-fan.interface";

export class CeilingFan implements CeilingFanInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public on(): void {
    console.log(`${this.prefix()}Ceiling Fan is ON`);
  }

  public off(): void {
    console.log(`${this.prefix()}Ceiling Fan is OFF`);
  }
}
