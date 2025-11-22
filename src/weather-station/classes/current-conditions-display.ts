import { DisplayElementInterface } from "../interfaces/display-element.interface";
import { ObserverInterface } from "../interfaces/observer.interface";
import { WeatherData } from "./weather-data";

export class CurrentConditionsDisplay
  implements DisplayElementInterface, ObserverInterface
{
  private temp: number | null = null;
  private humidity: number | null = null;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(): void {
    const temp = this.weatherData.getTemperature();
    const humidity = this.weatherData.getHumidity();

    if (temp !== null && humidity !== null) {
      this.temp = temp;
      this.humidity = humidity;
      this.display();
    }
  }
  display(): void {
    console.log(
      `Current condition: Temperature: ${this.temp} degrees | Humidity: ${this.humidity}`
    );
  }
}
