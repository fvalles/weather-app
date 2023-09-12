import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {WeatherDto} from '../types';

/**
 * fetchWeather helper
 */

const fetchWeather = async (): Promise<WeatherDto[]> => {
  const response = await fetch(
    'https://us-central1-mobile-assignment-server.cloudfunctions.net/weather',
  );
  const result = await response.json();

  return result as WeatherDto[];
};

/**
 * useFetchWeather query
 */

export const useFetchWeather = (): UseQueryResult<WeatherDto[], Error> =>
  useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });
