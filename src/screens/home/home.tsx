import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useFetchWeather} from './queries/use-fetch-weather';
import {mapWeatherByCity} from './helpers/map-weather-by-city';
import {WeatherByCity} from './types';
import {H1, H2} from '../../components/typography';
import {Spacer} from '../../components/spacer';
import {Button} from '../../components/button';
import {Loading} from '../../components/loading';
import cityDefaultImage from '../../../assets/images/city-default-image.webp';
import {EmptyState} from '../../components/empty-state';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonContainer,
  CityImageContainer,
  CityNameContainer,
  ScreenContainer,
  TitleContainer,
} from './styled-components';
import {HomeStackNavigationProps} from '../../stacks/home-stack/types';
import {SafeArea} from '../../components/safe-area';

/**
 * Constants
 */

const BACKGROUND_IMAGE_STYLES = {opacity: 0.7, borderRadius: 10};

/**
 * Home Screen
 */

export const Home = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const {data, error, isLoading, isRefetching, refetch} = useFetchWeather();
  const {navigate} = useNavigation<HomeStackNavigationProps>();

  const weatherByCity = mapWeatherByCity(data);

  const renderItem = ({
    item: {
      city: {name, picture},
    },
    item,
  }: {
    item: WeatherByCity;
  }) => (
    <>
      <TouchableOpacity
        onPress={() => {
          navigate('CityWeather', {...item});
        }}>
        <CityImageContainer
          source={{uri: picture}}
          resizeMode="cover"
          defaultSource={cityDefaultImage}
          imageStyle={BACKGROUND_IMAGE_STYLES}>
          <CityNameContainer>
            <H1>{name}</H1>
          </CityNameContainer>
        </CityImageContainer>
      </TouchableOpacity>
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
    <SafeArea>
      <ScreenContainer>
        <TitleContainer>
          <H2>Weather</H2>
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
    </SafeArea>
  );
};
