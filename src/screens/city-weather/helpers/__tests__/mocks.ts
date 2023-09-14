import {TemperatureValues} from '../../../home/types';
import {SortedCelsiusTemperatures} from '../../types';
import {GetChartDataResponse} from '../get-chart-data';
import {GetTemperatureKpisResponse} from '../get-temperature-kpis';

export const TEMPERATURE_VALUES_MOCK: TemperatureValues[] = [
  {date: '2023-09-14T04:00:00+00:00', temp: 82.41, tempType: 'F'},
  {date: '2023-09-14T20:00:00+00:00', temp: 26.03, tempType: 'C'},
  {date: '2023-09-14T08:00:00+00:00', temp: 83.18, tempType: 'F'},
  {date: '2023-09-14T12:00:00+00:00', temp: 24.7, tempType: 'C'},
  {date: '2023-09-14T00:00:00+00:00', temp: 85.34, tempType: 'F'},
  {date: '2023-09-14T16:00:00+00:00', temp: 23.11, tempType: 'C'},
];

export const CELSIUS_TEMPERATURE_VALUES_MOCK: TemperatureValues[] = [
  {date: '2023-09-14T04:00:00+00:00', temp: 28.01, tempType: 'C'},
  {date: '2023-09-14T20:00:00+00:00', temp: 26.03, tempType: 'C'},
  {date: '2023-09-14T08:00:00+00:00', temp: 28.43, tempType: 'C'},
  {date: '2023-09-14T12:00:00+00:00', temp: 24.7, tempType: 'C'},
  {date: '2023-09-14T00:00:00+00:00', temp: 29.63, tempType: 'C'},
  {date: '2023-09-14T16:00:00+00:00', temp: 23.11, tempType: 'C'},
];

export const SORTED_CELSIUS_TEMPERATURE_VALUES_MOCK: SortedCelsiusTemperatures[] =
  [
    {date: '2023-09-14T00:00:00+00:00', temp: 29.63},
    {date: '2023-09-14T04:00:00+00:00', temp: 28.01},
    {date: '2023-09-14T08:00:00+00:00', temp: 28.43},
    {date: '2023-09-14T12:00:00+00:00', temp: 24.7},
    {date: '2023-09-14T16:00:00+00:00', temp: 23.11},
    {date: '2023-09-14T20:00:00+00:00', temp: 26.03},
  ];

export const TEMPERATURE_KPIS_MOCK: GetTemperatureKpisResponse = {
  averageTemperature: 26.65,
  maxTemperature: 29.63,
  minTemperature: 23.11,
};

export const CHART_DATA_MOCK: GetChartDataResponse[] = [
  {
    dataPointText: '29.63',
    label: '0hs',
    labelTextStyle: {color: 'white'},
    value: 29.63,
  },
  {
    dataPointText: '28.01',
    label: '4hs',
    labelTextStyle: {color: 'white'},
    value: 28.01,
  },
  {
    dataPointText: '28.43',
    label: '8hs',
    labelTextStyle: {color: 'white'},
    value: 28.43,
  },
  {
    dataPointText: '24.7',
    label: '12hs',
    labelTextStyle: {color: 'white'},
    value: 24.7,
  },
  {
    dataPointText: '23.11',
    label: '16hs',
    labelTextStyle: {color: 'white'},
    value: 23.11,
  },
  {
    dataPointText: '26.03',
    label: '20hs',
    labelTextStyle: {color: 'white'},
    value: 26.03,
  },
];
