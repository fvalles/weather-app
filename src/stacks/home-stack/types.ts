import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WeatherByCity} from '../../screens/home/types';

export type HomeStackParamList = {
  Home: undefined;
  CityWeather: WeatherByCity;
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;
