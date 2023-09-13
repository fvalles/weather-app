import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useFetchWeather} from './queries/use-fetch-weather';
import {mapWeatherByCity} from './helpers/map-weather-by-city';
import {WeatherByCity} from './types';
import styled from 'styled-components/native';
import {H1, H2} from '../../components/typography';
import {Spacer} from '../../components/spacer';
import {Button} from '../../components/button';
import {Loading} from '../../components/loading';
import cityDefaultImage from '../../../assets/images/city-default-image.webp';
import {EmptyState} from '../../components/empty-state';

/**
 * Constants
 */

const BACKGROUND_IMAGE_STYLES = {opacity: 0.7, borderRadius: 10};

/**
 * Styled Components
 */

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const CityImageContainer = styled.ImageBackground`
  border-radius: 10px;
  height: 88px;
`;

const CityNameContainer = styled.View`
  margin-top: ${({theme}) => theme.Spacers.xs};
  padding-left: ${({theme}) => theme.Spacers.xs};
`;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.Colors.black};
  flex: 1;
`;

const ScreenContainer = styled.View`
  flex: 1;
  padding-bottom: ${({theme}) => theme.Spacers.xs};
  padding-left: ${({theme}) => theme.Spacers.s};
  padding-right: ${({theme}) => theme.Spacers.s};
  padding-top: ${({theme}) => theme.Spacers.xs};
`;

const TitleContainer = styled.View`
  margin-bottom: ${({theme}) => theme.Spacers.m};
`;

/**
 * Home Screen
 */

export const Home = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const {data, error, isLoading, isRefetching, refetch} = useFetchWeather();

  const weatherByCity = mapWeatherByCity(data);

  const renderItem = ({
    item: {
      city: {name, picture},
    },
  }: {
    item: WeatherByCity;
  }) => (
    <>
      <CityImageContainer
        source={{uri: picture}}
        resizeMode="cover"
        defaultSource={cityDefaultImage}
        imageStyle={BACKGROUND_IMAGE_STYLES}>
        <CityNameContainer>
          <H1 color="white">{name}</H1>
        </CityNameContainer>
      </CityImageContainer>
      <Spacer size="s" />
    </>
  );

  if (isLoading || isRefetching || isAnimationPlaying) {
    return <Loading setIsAnimationPlaying={setIsAnimationPlaying} />;
  }

  if (error) {
    return (
      <EmptyState
        buttonTitle="Try Again"
        title="Ops! An error occurred when trying to access the server :("
        onPress={refetch}
      />
    );
  }

  return (
    <StyledSafeAreaView>
      <ScreenContainer>
        <TitleContainer>
          <H2 color="white">Weather</H2>
        </TitleContainer>
        <FlatList
          data={weatherByCity}
          renderItem={renderItem}
          keyExtractor={({city: {name}}) => name}
          ListFooterComponent={
            <ButtonContainer>
              <Button onPress={refetch} title="Refresh" />
            </ButtonContainer>
          }
        />
        <Spacer />
      </ScreenContainer>
    </StyledSafeAreaView>
  );
};
