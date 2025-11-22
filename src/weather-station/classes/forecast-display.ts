import { DisplayElementInterface } from "../interfaces/display-element.interface";
import { ObserverInterface } from "../interfaces/observer.interface";
import { WeatherData } from "./weather-data";

export class ForecastDisplay
  implements ObserverInterface, DisplayElementInterface
{
  private currentPressure: number = 29.92;
  private lastPressure: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update() {
    const pressure = this.weatherData.getPressure();

    if (pressure !== null) {
      this.lastPressure = this.currentPressure;
      this.currentPressure = pressure;

      this.display();
    }
  }

  public display() {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure == this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
}
