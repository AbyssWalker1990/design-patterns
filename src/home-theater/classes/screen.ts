import { ScreenInterface } from "../interfaces/screen.interface";

export class Screen implements ScreenInterface {
  constructor(private name = "Screen") {}

  up(): void {
    console.log(`${this.name}: going up`);
  }

  down(): void {
    console.log(`${this.name}: going down`);
  }
}
