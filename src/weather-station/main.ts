import { CurrentConditionsDisplay } from "./classes/current-conditions-display";
import { ForecastDisplay } from "./classes/forecast-display";
import { HeatIndexDisplay } from "./classes/heat-index-display";
import { StatisticsDisplay } from "./classes/statistics-display";
import { WeatherData } from "./classes/weather-data";

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
