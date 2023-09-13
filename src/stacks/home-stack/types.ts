import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  CityWeather: undefined;
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>;
