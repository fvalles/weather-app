import React from 'react';

import {SafeArea} from '../../components/safe-area';
import {BigNumbers, H1, H3} from '../../components/typography';
import {Spacer} from '../../components/spacer';
import {LineChart} from 'react-native-gifted-charts';
import {Colors} from '../../theme/colors';
import {useCityWeather} from './hooks/use-city-weather';
import {
  LineChartContainer,
  MinAndMaxTemperatureContainer,
  ScreenContainer,
} from './styled-components';

/**
 * CityWeather Screen
 */

export const CityWeather = () => {
  const {
    averageTemperature,
    chartData,
    cityName,
    date,
    maxTemperature,
    minTemperature,
  } = useCityWeather();

  return (
    <SafeArea headerGoBack>
      <ScreenContainer>
        <H1>{cityName}</H1>
        <Spacer size="xs" />
        <H3>{date}</H3>
        <Spacer size="xl" />
        <BigNumbers>{averageTemperature}°C</BigNumbers>
        <Spacer />
        <MinAndMaxTemperatureContainer>
          <H3>H: {maxTemperature}°C</H3>
          <H3>L: {minTemperature}°C</H3>
        </MinAndMaxTemperatureContainer>
        <LineChartContainer>
          <LineChart
            initialSpacing={5}
            data={chartData}
            textColor1={Colors.white}
            textShiftX={10}
            textShiftY={40}
            textFontSize={14}
            thickness={5}
            hideRules
            showVerticalLines
            verticalLinesColor={Colors.tealMeNoLies}
            hideYAxisText
            xAxisColor={Colors.tealMeNoLies}
            color={Colors.tealMeNoLies}
            yAxisColor={Colors.tealMeNoLies}
            yAxisThickness={0}
            isAnimated
            dataPointsColor="white"
            height={250}
            curved
          />
        </LineChartContainer>
      </ScreenContainer>
    </SafeArea>
  );
};
