import { StreamingPlayerInterface } from "../interfaces/streaming-player.interface";

export class StreamingPlayer implements StreamingPlayerInterface {
  constructor(private name = "StreamingPlayer") {}

  on(): void {
    console.log(`${this.name}: turned on`);
  }

  off(): void {
    console.log(`${this.name}: turned off`);
  }

  play(movie: string): void {
    console.log(`${this.name}: playing movie '${movie}'`);
  }

  stop(): void {
    console.log(`${this.name}: stopped`);
  }

  pause(): void {
    console.log(`${this.name}: paused`);
  }

  setTwoChannelAudio(): void {
    console.log(`${this.name}: set to two-channel audio`);
  }

  setSurroundAudio(): void {
    console.log(`${this.name}: set to surround audio`);
  }
}
