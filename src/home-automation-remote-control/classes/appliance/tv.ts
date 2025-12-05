import { TvInterface } from "../../interfaces/tv.interface";

export class Tv implements TvInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public on(): void {
    console.log(`${this.prefix()}TV is ON`);
  }

  public off(): void {
    console.log(`${this.prefix()}TV is OFF`);
  }
}
