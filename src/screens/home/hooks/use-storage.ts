import {
  MMKVInstance,
  MMKVLoader,
  useMMKVStorage,
} from 'react-native-mmkv-storage';
import {WeatherDto} from '../types';

const MMKV: MMKVInstance = new MMKVLoader().initialize();

export const useStorage = (key: string) => {
  const [value, setValue] = useMMKVStorage<WeatherDto[]>(key, MMKV);
  return [value, setValue] as const;
};
