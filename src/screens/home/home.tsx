import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useFetchWeather} from './queries/use-fetch-weather';
import {getCitiesNames} from './helpers/get-cities-names';

/**
 * Home Screen
 */

export const Home = () => {
  const {data} = useFetchWeather();

  const cities = getCitiesNames(data);

  const renderItem = ({item}: {item: string}) => (
    <>
      <Text>{item}</Text>
    </>
  );

  return (
    <SafeAreaView>
      <Text>Welcome to React Native</Text>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};
