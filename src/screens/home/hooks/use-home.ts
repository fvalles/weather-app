import Snackbar from 'react-native-snackbar';
import {Colors} from '../../../theme/colors';
import {mapWeatherByCity} from '../helpers/map-weather-by-city';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '../../../stacks/home-stack/types';
import {useEffect, useState} from 'react';
import {useFetchWeather} from '../queries/use-fetch-weather';
import {useStorage} from './use-storage';
import {useNetInfo} from '@react-native-community/netinfo';

export const useHome = () => {
  const {isConnected} = useNetInfo();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const {data, error, isLoading, isRefetching, refetch} = useFetchWeather();
  const {navigate} = useNavigation<HomeStackNavigationProps>();
  const [storageData, setStorageData] = useStorage('weather-api-data');
  const [connectionLost, setConnectionLost] = useState(false);

  const weatherByCity = mapWeatherByCity(isConnected ? data : storageData);

  useEffect(() => {
    if (data && setStorageData) {
      setStorageData(data);
    }
  }, [data, setStorageData]);

  useEffect(() => {
    if (isConnected === false) {
      setConnectionLost(true);

      Snackbar.show({
        backgroundColor: Colors.loveGoddess,
        duration: Snackbar.LENGTH_SHORT,
        text: 'You are not connected to the internet. Using last fetched data',
        textColor: Colors.white,
      });
    }

    if (isConnected && connectionLost) {
      setConnectionLost(false);
      refetch();

      Snackbar.show({
        backgroundColor: Colors.hulk,
        duration: Snackbar.LENGTH_SHORT,
        text: 'Internet connection re-established',
        textColor: Colors.white,
      });
    }
  }, [connectionLost, isConnected, refetch]);

  return {
    error,
    isAnimationPlaying,
    isConnected,
    isLoading,
    isRefetching,
    navigate,
    refetch,
    setIsAnimationPlaying,
    weatherByCity,
  };
};
