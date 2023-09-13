import {TemperatureValues} from '../../../home/types';
import {SortedCelsiusTemperatures} from '../../types';

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
