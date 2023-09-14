import {SortedCelsiusTemperatures} from '../types';

/**
 * Types
 */

interface GetTemperatureKpisResponse {
  averageTemperature: number;
  maxTemperature: number;
  minTemperature: number;
}

/**
 * getTemperatureKpis helper
 */

export const getTemperatureKpis = (
  temperatureValues: SortedCelsiusTemperatures[],
): GetTemperatureKpisResponse => {
  let temperatureSum = 0;
  const temperatureValuesCount = temperatureValues.length;
  let maxTemperature = temperatureValues[0].temp;
  let minTemperature = temperatureValues[0].temp;

  temperatureValues.forEach(({temp}) => {
    if (temp < minTemperature) {
      minTemperature = temp;
    }

    if (temp > maxTemperature) {
      maxTemperature = temp;
    }

    temperatureSum += temp;
  });

  const averageTemperature = Number(
    (temperatureSum / temperatureValuesCount).toFixed(2),
  );

  return {
    averageTemperature,
    maxTemperature,
    minTemperature,
  };
};
