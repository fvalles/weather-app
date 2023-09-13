export interface City {
  name: string;
  picture: string;
}

export interface WeatherDto {
  date: string;
  city: City;
  tempType: string;
  temp: number;
}

export type TemperatureValues = Omit<WeatherDto, 'city'>;

export interface WeatherByCity {
  city: City;
  values: TemperatureValues[];
}
