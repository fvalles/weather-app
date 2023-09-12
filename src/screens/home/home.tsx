import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useFetchWeather} from './queries/use-fetch-weather';
import {Weather} from './types';

export const Home = () => {
  const {data} = useFetchWeather();

  const renderItem = ({
    item: {
      date,
      city: {name: cityName},
      tempType,
      temp,
    },
  }: {
    item: Weather;
  }) => (
    <>
      <Text>Values:</Text>
      <Text>date {date}</Text>
      <Text>cityName {cityName}</Text>
      <Text>tempType {tempType}</Text>
      <Text>temp {temp}</Text>
    </>
  );

  return (
    <SafeAreaView>
      <Text>Welcome to React Native</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={({date, city: {name}}) => `${date}-${name}`}
      />
    </SafeAreaView>
  );
};
