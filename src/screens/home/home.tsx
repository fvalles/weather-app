import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useFetchWeather} from './queries/use-fetch-weather';
import {mapWeatherByCity} from './helpers/map-weather-by-city';
import {WeatherByCity} from './types';

/**
 * Home Screen
 */

export const Home = () => {
  const {data} = useFetchWeather();

  const weatherByCity = mapWeatherByCity(data);

  const renderItem = ({
    item: {
      city: {name, picture},
    },
  }: {
    item: WeatherByCity;
  }) => (
    <>
      <Text>{name}</Text>
      <Text>{picture}</Text>
    </>
  );

  return (
    <SafeAreaView>
      <Text>Welcome to React Native</Text>
      <FlatList
        data={weatherByCity}
        renderItem={renderItem}
        keyExtractor={({city: {name}}) => name}
      />
    </SafeAreaView>
  );
};
