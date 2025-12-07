export interface StreamingPlayerInterface {
  on(): void;
  off(): void;
  play(movie: string): void;
  stop(): void;
  pause(): void;
  setTwoChannelAudio(): void;
  setSurroundAudio(): void;
}
