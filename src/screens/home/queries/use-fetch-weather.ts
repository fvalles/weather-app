import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {Weather} from '../types';

/**
 * fetchWeather helper
 */

const fetchWeather = async (): Promise<Weather[]> => {
  const response = await fetch(
    'https://us-central1-mobile-assignment-server.cloudfunctions.net/weather',
  );
  const result = await response.json();

  return result as Weather[];
};

/**
 * useFetchWeather query
 */

export const useFetchWeather = (): UseQueryResult<Weather[], Error> =>
  useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });
