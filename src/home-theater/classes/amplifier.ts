import { AmplifierInterface } from "../interfaces/amplifier.interface";
import { StreamingPlayerInterface } from "../interfaces/streaming-player.interface";

export class Amplifier implements AmplifierInterface {
  constructor(private name = "Amplifier") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  setStreamingPlayer(player: StreamingPlayerInterface): void {
    console.log(`${this.name}: streaming player set`);
  }

  setSurroundSound(): void {
    console.log(`${this.name}: surround sound enabled`);
  }

  setVolume(level: number): void {
    console.log(`${this.name}: volume set to ${level}`);
  }

  setStereoSound(): void {
    console.log(`${this.name}: stereo sound enabled`);
  }
}
