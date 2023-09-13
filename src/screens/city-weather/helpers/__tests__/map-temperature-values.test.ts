import {mapTemperatureValues} from '../map-temperature-values';
import {
  TEMPERATURE_VALUES_MOCK,
  SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK,
} from './mocks';

test('mapTemperatureValues helper should map a temperature values sorting it by date and converting temperatures to celsius', () => {
  const temperatureValues = mapTemperatureValues(TEMPERATURE_VALUES_MOCK);

  expect(temperatureValues).toStrictEqual(
    SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK,
  );
});
