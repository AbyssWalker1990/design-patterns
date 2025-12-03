import { StereoInterface } from "../../interfaces/stereo.interface";

export class Stereo implements StereoInterface {
  constructor(private readonly name: string = "") {}

  private prefix(): string {
    return this.name ? `${this.name}: ` : "";
  }

  public on(): void {
    console.log(`${this.prefix()}Stereo is ON`);
  }

  public off(): void {
    console.log(`${this.prefix()}Stereo is OFF`);
  }

  public setCd(): void {
    console.log(`${this.prefix()}Stereo is set to CD`);
  }

  public setDvd(): void {
    console.log(`${this.prefix()}Stereo is set to DVD`);
  }

  public setRadio(): void {
    console.log(`${this.prefix()}Stereo is set to Radio`);
  }

  public setVolume(volume: number): void {
    console.log(`${this.prefix()}Stereo volume set to ${volume}`);
  }
}
