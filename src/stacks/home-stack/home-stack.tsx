import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/home';
import {CityWeather} from '../../screens/city-weather';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * HomeStack
 */

export const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CityWeather" component={CityWeather} />
  </Stack.Navigator>
);
