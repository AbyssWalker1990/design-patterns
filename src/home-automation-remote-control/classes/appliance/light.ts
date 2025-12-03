import { LightInterface } from "../../interfaces/light.interface";

export class Light implements LightInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public on() {
    console.log(`${this.prefix()}Lights ON`);
  }

  public off() {
    console.log(`${this.prefix()}Lights OFF`);
  }
}
