import {getTemperatureKpis} from '../get-temperature-kpis';
import {
  SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK,
  TEMPERATURE_KPIS_MOCK,
} from './mocks';

test('getTemperatureKpis helper should return an object with the following kpis averageTemperature, maxTemperature and minTemperature', () => {
  const temperatureKpis = getTemperatureKpis(
    SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK,
  );

  expect(temperatureKpis).toStrictEqual(TEMPERATURE_KPIS_MOCK);
});
