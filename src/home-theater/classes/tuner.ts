import { TunerInterface } from "../interfaces/tuner.interface";

export class Tuner implements TunerInterface {
  constructor(private name = "Tuner") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  setFrequency(frequency: number): void {
    console.log(`${this.name}: frequency set to ${frequency}`);
  }

  setAm(): void {
    console.log(`${this.name}: set to AM`);
  }

  setFm(): void {
    console.log(`${this.name}: set to FM`);
  }
}
