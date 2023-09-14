import styled from 'styled-components/native';

export const LineChartContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({theme}) => theme.Spacers.m};
`;

export const ScreenContainer = styled.View`
  align-items: center;
  display: flex;
  flex: 1;
  padding-right: ${({theme}) => theme.Spacers.s};
  padding-left: ${({theme}) => theme.Spacers.s};
  padding-top: ${({theme}) => theme.Spacers.m};
  padding-bottom: ${({theme}) => theme.Spacers.xs};
`;

export const MinAndMaxTemperatureContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: ${({theme}) => theme.Spacers.xxl};
  padding-left: ${({theme}) => theme.Spacers.xxl};
  width: 100%;
`;
