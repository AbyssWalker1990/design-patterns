import { DisplayElementInterface } from "../interfaces/display-element.interface";
import { ObserverInterface } from "../interfaces/observer.interface";
import { WeatherData } from "./weather-data";

export class HeatIndexDisplay
  implements DisplayElementInterface, ObserverInterface
{
  private heatIndex: number | null = null;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(): void {
    const temp = this.weatherData.getTemperature();
    const humidity = this.weatherData.getHumidity();

    if (temp !== null && humidity !== null) {
      this.heatIndex = this.computeHeatIndex(temp, humidity);
      this.display();
    }
  }

  private computeHeatIndex(t: number, rh: number) {
    const index =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh);

    return index;
  }

  display(): void {
    console.log(`Heat Index: ${this.heatIndex}`);
  }
}
