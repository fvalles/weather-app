import {WeatherDto} from '../types';

export const getCitiesNames = (data?: WeatherDto[]): string[] | [] => {
  const cities: string[] = [];

  data?.forEach(weatherDto => {
    const {
      city: {name: cityName},
    } = weatherDto;

    if (cities.length === 0 || !cities.includes(cityName)) {
      cities.push(cityName);
    }
  });

  return cities.sort();
};
