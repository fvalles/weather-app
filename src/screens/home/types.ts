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

export interface WeatherByCity {
  city: City;
  values: Omit<WeatherDto, 'city'>[];
}
