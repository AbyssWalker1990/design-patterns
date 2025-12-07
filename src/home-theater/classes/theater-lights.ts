import { TheaterLightsInterface } from "../interfaces/theater-lights";

export class TheaterLights implements TheaterLightsInterface {
  constructor(private name = "TheaterLights") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  dim(level: number): void {
    console.log(`${this.name}: dimmed to ${level}%`);
  }
}
