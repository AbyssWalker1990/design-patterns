import { HottubInterface } from "../../interfaces/hottub.interface";

export class Hottub implements HottubInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public on(): void {
    console.log(`${this.prefix()}Hot tub is ON`);
  }

  public off(): void {
    console.log(`${this.prefix()}Hot tub is OFF`);
  }
}
