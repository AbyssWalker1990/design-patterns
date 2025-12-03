import { GarageDoorInterface } from "../../interfaces/garage-door.interface";

export class GarageDoor implements GarageDoorInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }
  public up() {
    console.log(`${this.prefix()}Garage Door is OPEN`);
  }

  public down() {
    console.log(`${this.prefix()}Garage Door is CLOSED`);
  }

  public stop() {
    console.log(`${this.prefix()}Garage Door Stop`);
  }

  public lightOn() {
    console.log(`${this.prefix()}Garage Lights ON`);
  }

  public lightOff() {
    console.log(`${this.prefix()}Garage Lights OFF`);
  }
}
