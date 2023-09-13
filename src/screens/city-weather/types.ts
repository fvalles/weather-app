import {WeatherDto} from '../home/types';

export enum TemperatureType {
  CELSIUS = 'C',
  FAHRENHEIT = 'F',
  KELVIN = 'K',
}

export interface SortedCelsiusTemperatures
  extends Pick<WeatherDto, 'date' | 'temp'> {}
