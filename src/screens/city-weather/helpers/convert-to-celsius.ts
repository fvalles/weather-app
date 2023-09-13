import {TemperatureValues} from '../../home/types';
import {TemperatureType} from '../types';

export const convertToCelsius = (
  values: TemperatureValues[],
): TemperatureValues[] =>
  values.map(value => {
    const {temp, tempType} = value;
    let celsiusTemperature = temp;

    if (tempType === TemperatureType.FAHRENHEIT) {
      celsiusTemperature = (temp - 32) / 1.8;
    }

    if (tempType === TemperatureType.KELVIN) {
      celsiusTemperature = temp - 273.15;
    }

    return {
      ...value,
      temp: Number(celsiusTemperature.toFixed(2)),
      tempType: TemperatureType.CELSIUS,
    };
  });
