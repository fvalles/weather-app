import {getChartData} from '../get-chart-data';
import {CHART_DATA_MOCK, SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK} from './mocks';

test('getChartData helper should return an array with chart data', () => {
  const chartData = getChartData(SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK);

  expect(chartData).toStrictEqual(CHART_DATA_MOCK);
});
