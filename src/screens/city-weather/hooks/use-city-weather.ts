import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../../../stacks/home-stack/types';
import {mapTemperatureValues} from '../helpers/map-temperature-values';
import {format} from 'date-fns';
import {getTemperatureKpis} from '../helpers/get-temperature-kpis';
import {getChartData} from '../helpers/get-chart-data';

/**
 * useCityWeather hook
 */

export const useCityWeather = () => {
  const {
    params: {
      city: {name: cityName},
      values,
    },
  } = useRoute<RouteProp<HomeStackParamList, 'CityWeather'>>();

  const temperatureValues = mapTemperatureValues(values);

  const dateString = temperatureValues[0].date.substring(0, 10);
  const date = format(new Date(dateString), 'PPPP');

  const {averageTemperature, maxTemperature, minTemperature} =
    getTemperatureKpis(temperatureValues);

  const chartData = getChartData(temperatureValues);

  return {
    averageTemperature,
    chartData,
    cityName,
    date,
    maxTemperature,
    minTemperature,
  };
};
