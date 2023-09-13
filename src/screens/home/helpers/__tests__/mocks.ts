import {WeatherByCity, WeatherDto} from '../../types';

const AMSTERDAM_CITY_MOCK = {
  name: 'Amsterdam',
  picture:
    'https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/amsterdam.jpg?alt=media&token=98d29e95-1cac-400b-bb7b-9290fea8d508',
};

const BARCELONA_CITY_MOCK = {
  name: 'Barcelona',
  picture:
    'https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/barcelona.jpg?alt=media&token=78363b9d-3c33-432c-9bf8-f60786153b13',
};

const AMSTERDAM_MIDDAY_VALUES_MOCK = {
  date: '2023-09-13T12:00:00+00:00',
  tempType: 'F',
  temp: 79.02,
};

const BARCELONA_MIDDAY_VALUES_MOCK = {
  date: '2023-09-13T12:00:00+00:00',
  tempType: 'K',
  temp: 299.08,
};

const BARCELONA_MIDNIGHT_VALUES_MOCK = {
  date: '2023-09-13T00:00:00+00:00',
  tempType: 'K',
  temp: 299.02,
};

export const WEATHER_DTO_MOCK: WeatherDto[] = [
  {
    city: BARCELONA_CITY_MOCK,
    ...BARCELONA_MIDDAY_VALUES_MOCK,
  },
  {
    city: AMSTERDAM_CITY_MOCK,
    ...AMSTERDAM_MIDDAY_VALUES_MOCK,
  },
  {
    city: BARCELONA_CITY_MOCK,
    ...BARCELONA_MIDNIGHT_VALUES_MOCK,
  },
];

export const WEATHER_BY_CITY_MOCK: WeatherByCity[] = [
  {
    city: AMSTERDAM_CITY_MOCK,
    values: [{...AMSTERDAM_MIDDAY_VALUES_MOCK}],
  },
  {
    city: BARCELONA_CITY_MOCK,
    values: [
      {...BARCELONA_MIDDAY_VALUES_MOCK},
      {...BARCELONA_MIDNIGHT_VALUES_MOCK},
    ],
  },
];
