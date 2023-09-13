import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import weatherStormAnimation from '../../../assets/animations/weather-storm.json';
import {SafeArea} from '../safe-area';

/**
 * Constants
 */

const LOTTIE_DIMENSIONS = {height: 200, width: 300};

/**
 * Styled Components
 */

const AnimationContainer = styled.View`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

/**
 * Loading Component
 */

export const Loading = ({
  setIsAnimationPlaying,
}: {
  setIsAnimationPlaying: (isAnimationPlaying: boolean) => void;
}) => {
  useEffect(() => {
    setIsAnimationPlaying(true);
  }, [setIsAnimationPlaying]);

  return (
    <SafeArea backgroundColor="white">
      <AnimationContainer>
        <LottieView
          style={LOTTIE_DIMENSIONS}
          source={weatherStormAnimation}
          autoPlay
          loop={false}
          duration={1500}
          onAnimationFinish={() => setIsAnimationPlaying(false)}
        />
      </AnimationContainer>
    </SafeArea>
  );
};
