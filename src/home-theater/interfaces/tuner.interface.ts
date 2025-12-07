export interface TunerInterface {
  on(): void;
  off(): void;
  setFrequency(frequency: number): void;
  setAm(): void;
  setFm(): void;
}
