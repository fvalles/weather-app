import {WeatherByCity, WeatherDto} from '../types';
import {getCitiesNames} from './get-cities-names';

export const mapWeatherByCity = (data?: WeatherDto[]) => {
  const cities = getCitiesNames(data);

  const weatherByCity: WeatherByCity[] = [];

  cities.forEach((cityName, cityNameIndex) => {
    const cityData = data?.filter(({city: {name}}) => name === cityName);

    cityData?.forEach(({city, ...rest}, cityDataIndex) => {
      if (cityDataIndex === 0) {
        weatherByCity.push({city, values: []});
      }

      weatherByCity[cityNameIndex].values.push({...rest});
    });
  });

  return weatherByCity;
};
