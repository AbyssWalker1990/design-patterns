import { DisplayElementInterface } from "../interfaces/display-element.interface";
import { ObserverInterface } from "../interfaces/observer.interface";
import { WeatherData } from "./weather-data";

export class StatisticsDisplay
  implements ObserverInterface, DisplayElementInterface
{
  private maxTemp: number = 0;
  private minTemp: number = 200;
  private tempSum: number = 0;
  private numReadings: number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(): void {
    const temp = this.weatherData.getTemperature();
    if (temp !== null) {
      this.tempSum += temp;
      this.numReadings++;

      if (temp > this.maxTemp) {
        this.maxTemp = temp;
      }

      if (temp < this.minTemp) {
        this.minTemp = temp;
      }

      this.display();
    }
  }

  public display() {
    console.log(
      "Avg/Max/Min temperature = " +
        this.tempSum / this.numReadings +
        "/" +
        this.maxTemp +
        "/" +
        this.minTemp
    );
  }
}
