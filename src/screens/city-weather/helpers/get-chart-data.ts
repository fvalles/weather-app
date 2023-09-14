import {SortedCelsiusTemperatures} from '../types';

/**
 * Types
 */

interface GetChartDataResponse {
  value: number;
  dataPointText: string;
  label: string;
  labelTextStyle: any;
}

/**
 * getChartData helper
 */

export const getChartData = (
  sortedCelsiusTemperatures: SortedCelsiusTemperatures[],
): GetChartDataResponse[] => {
  return sortedCelsiusTemperatures.map(({date, temp}) => {
    const isFirstNumberCero = date.substring(11, 12) === '0';

    return {
      dataPointText: temp.toString(),
      value: temp,
      label: `${date.substring(isFirstNumberCero ? 12 : 11, 13)}hs`,
      labelTextStyle: {color: 'white'},
    };
  });
};
