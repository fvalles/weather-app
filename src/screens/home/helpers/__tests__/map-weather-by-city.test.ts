import {mapWeatherByCity} from '../map-weather-by-city';
import {WEATHER_BY_CITY_MOCK, WEATHER_DTO_MOCK} from './mocks';

describe('mapWeatherByCity helper', () => {
  it('should return an empty array if data param is undefined', () => {
    const cities = mapWeatherByCity(undefined);

    expect(cities).toStrictEqual([]);
  });

  it('should return a weather by city array with cities sorted alphabetically when data param is defined', () => {
    const cities = mapWeatherByCity(WEATHER_DTO_MOCK);

    expect(cities).toStrictEqual(WEATHER_BY_CITY_MOCK);
  });
});
