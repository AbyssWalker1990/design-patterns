export interface StereoInterface {
  on(): void;
  off(): void;
  setCd(): void;
  setDvd(): void;
  setRadio(): void;
  setVolume(volume: number): void;
}
