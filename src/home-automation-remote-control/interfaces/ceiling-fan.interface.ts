export interface CeilingFanInterface {
  off(): void;
  high(): void;
  medium(): void;
  low(): void;
  getSpeed(): number;
}
