import { ProjectorInterface } from "../interfaces/projector.interface";

export class Projector implements ProjectorInterface {
  constructor(private name = "Projector") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  wideScreenMode(): void {
    console.log(`${this.name}: set to widescreen mode`);
  }

  tvMode(): void {
    console.log(`${this.name}: set to TV mode`);
  }
}
