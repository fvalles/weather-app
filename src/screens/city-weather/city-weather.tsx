import React from 'react';

import {SafeArea} from '../../components/safe-area';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../../stacks/home-stack/types';
import {BigNumbers, H1, H3} from '../../components/typography';
import styled from 'styled-components/native';
import {mapTemperatureValues} from './helpers/map-temperature-values';
import {format} from 'date-fns';
import {Spacer} from '../../components/spacer';
import {getTemperatureKpis} from './helpers/get-temperature-kpis';
/**
 * Styled Components
 */

const ScreenContainer = styled.View`
  align-items: center;
  display: flex;
  flex: 1;
  padding-right: ${({theme}) => theme.Spacers.s};
  padding-left: ${({theme}) => theme.Spacers.s};
  padding-top: ${({theme}) => theme.Spacers.m};
  padding-bottom: ${({theme}) => theme.Spacers.xs};
`;

const MinAndMaxTemperatureContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: ${({theme}) => theme.Spacers.xxl};
  padding-left: ${({theme}) => theme.Spacers.xxl};
  width: 100%;
`;

/**
 * CityWeather Screen
 */

export const CityWeather = () => {
  const {
    params: {
      city: {name},
      values,
    },
  } = useRoute<RouteProp<HomeStackParamList, 'CityWeather'>>();

  const temperatureValues = mapTemperatureValues(values);

  const dateString = temperatureValues[0].date.substring(0, 10);
  const date = format(new Date(dateString), 'PPPP');

  const {averageTemperature, maxTemperature, minTemperature} =
    getTemperatureKpis(temperatureValues);

  return (
    <SafeArea headerGoBack>
      <ScreenContainer>
        <H1>{name}</H1>
        <Spacer size="xs" />
        <H3>{date}</H3>
        <Spacer size="xl" />
        <BigNumbers>{averageTemperature}°C</BigNumbers>
        <Spacer />
        <MinAndMaxTemperatureContainer>
          <H3>H: {maxTemperature}°C</H3>
          <H3>L: {minTemperature}°C</H3>
        </MinAndMaxTemperatureContainer>
      </ScreenContainer>
    </SafeArea>
  );
};
