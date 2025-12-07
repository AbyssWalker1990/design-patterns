import { StreamingPlayerInterface } from "./streaming-player.interface";

export interface AmplifierInterface {
  on(): void;
  off(): void;
  setStreamingPlayer(player: StreamingPlayerInterface): void;
  setSurroundSound(): void;
  setVolume(level: number): void;
  setStereoSound(): void;
}
