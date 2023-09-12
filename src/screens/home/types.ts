export interface City {
  name: string;
  picture: string;
}

export interface Weather {
  date: string;
  city: City;
  tempType: string;
  temp: number;
}
