import {TemperatureValues} from '../../home/types';
import {SortedCelsiusTemperatures} from '../types';
import {convertToCelsius} from './convert-to-celsius';

/**
 *
 * @param values unsorted temperature values in kelvin, fahrenheit and celsius
 * @returns sorted temperature values converted to celsius
 */

export const mapTemperatureValues = (
  values: TemperatureValues[],
): SortedCelsiusTemperatures[] => {
  const celsiusTemperatures = convertToCelsius(values);

  const dates = celsiusTemperatures.map(({date}) => date).sort();

  const sortedCelsiusTemperatures: SortedCelsiusTemperatures[] = [];

  dates.forEach(dateValue => {
    celsiusTemperatures.forEach(({date, temp}) => {
      if (dateValue === date) {
        sortedCelsiusTemperatures.push({
          date,
          temp,
        });
      }
    });
  });

  return sortedCelsiusTemperatures;
};
