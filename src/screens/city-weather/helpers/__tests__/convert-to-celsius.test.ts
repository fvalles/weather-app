import {convertToCelsius} from '../convert-to-celsius';
import {
  TEMPERATURE_VALUES_MOCK,
  CELSIUS_TEMPERATURE_VALUES_MOCK,
} from './mocks';

describe('convertToCelsius helper', () => {
  it('should return an array of temperatures converting kelvin and farenheit values to celsius', () => {
    const celsiusTemperatures = convertToCelsius(TEMPERATURE_VALUES_MOCK);

    expect(celsiusTemperatures).toStrictEqual(CELSIUS_TEMPERATURE_VALUES_MOCK);
  });

  it('should return the same array if all temperatures values are celsius', () => {
    const celsiusTemperatures = convertToCelsius(
      CELSIUS_TEMPERATURE_VALUES_MOCK,
    );

    expect(celsiusTemperatures).toStrictEqual(CELSIUS_TEMPERATURE_VALUES_MOCK);
  });
});
