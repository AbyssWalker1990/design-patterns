import { CeilingFanInterface } from "../../interfaces/ceiling-fan.interface";

export class CeilingFan implements CeilingFanInterface {
  public static HIGH = 3;
  public static MEDIUM = 2;
  public static LOW = 1;
  public static OFF = 0;
  private speed = 0;

  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.prefix()}Ceiling Fan is on HIGH`);
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.prefix()}Ceiling Fan is OFF`);
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.prefix()}Ceiling Fan is on MEDIUM`);
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.prefix()}Ceiling Fan is on LOW`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}
