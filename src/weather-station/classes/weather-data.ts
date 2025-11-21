import { ObserverInterface } from "../interfaces/observer.interface";
import { SubjectInterface } from "../interfaces/subject.interface";

export class WeatherData implements SubjectInterface {
  private observers: ObserverInterface[];
  private temp: number | null = null;
  private humidity: number | null = null;
  private pressure: number | null = null;

  constructor() {
    this.observers = [];
  }

  public registerObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: ObserverInterface): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(): void {
    this.observers.forEach((obs) => {
      if (
        this.temp !== null &&
        this.humidity !== null &&
        this.pressure !== null
      ) {
        obs.update(this.temp, this.humidity, this.pressure);
      }
    });
  }

  public measurementsChanged() {
    this.notifyObservers();
  }
  public setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
