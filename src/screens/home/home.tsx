import React, {useEffect, useState} from 'react';
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
import {useStorage} from './hooks/use-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import {Colors} from '../../theme/colors';

/**
 * Constants
 */

const BACKGROUND_IMAGE_STYLES = {opacity: 0.7, borderRadius: 10};

/**
 * Home Screen
 */

export const Home = () => {
  const {isConnected} = useNetInfo();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const {data, error, isLoading, isRefetching, refetch} = useFetchWeather();
  const {navigate} = useNavigation<HomeStackNavigationProps>();
  const [storageData, setStorageData] = useStorage('weather-api-data');
  const [connectionLost, setConnectionLost] = useState(false);

  const weatherByCity = mapWeatherByCity(isConnected ? data : storageData);

  useEffect(() => {
    if (data && setStorageData) {
      setStorageData(data);
    }
  }, [data, setStorageData]);

  useEffect(() => {
    if (isConnected === false) {
      setConnectionLost(true);

      Snackbar.show({
        backgroundColor: Colors.loveGoddess,
        duration: Snackbar.LENGTH_SHORT,
        text: 'You are not connected to the internet. Using last fetched data',
        textColor: Colors.white,
      });
    }

    if (isConnected && connectionLost) {
      setConnectionLost(false);
      refetch();

      Snackbar.show({
        backgroundColor: Colors.hulk,
        duration: Snackbar.LENGTH_SHORT,
        text: 'Internet connection re-established',
        textColor: Colors.white,
      });
    }
  }, [connectionLost, isConnected, refetch]);

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

  if (error && isConnected) {
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
