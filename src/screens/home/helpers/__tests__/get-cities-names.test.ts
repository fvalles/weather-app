import {getCitiesNames} from '../get-cities-names';
import {WEATHER_DTO_MOCK} from './mocks';

describe('getCitiesNames helper', () => {
  it('should return an empty array if data param is undefined', () => {
    const cities = getCitiesNames(undefined);

    expect(cities).toStrictEqual([]);
  });

  it('should return an array with cities names sorted alphabetically without duplicates when data param is defined', () => {
    const cities = getCitiesNames(WEATHER_DTO_MOCK);

    expect(cities).toStrictEqual(['Amsterdam', 'Barcelona']);
  });
});
