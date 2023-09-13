import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import styled from 'styled-components/native';
import {Icon} from '../icon';
import {KeyColors} from '../../theme/colors';

/**
 * Types
 */

type SafeAreaProps = PropsWithChildren<{
  backgroundColor?: KeyColors;
  headerGoBack?: boolean;
}>;

/**
 * Styled Components
 */

const StyledSafeAreaView = styled.SafeAreaView<{backgroundColor?: KeyColors}>`
  background-color: ${({backgroundColor = 'black', theme}) =>
    theme.Colors[backgroundColor]};
  flex: 1;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-left: ${({theme}) => theme.Spacers.s};
`;

/**
 * SafeArea Component
 */

export const SafeArea = ({
  backgroundColor,
  children,
  headerGoBack,
}: SafeAreaProps) => {
  const {goBack} = useNavigation();

  return (
    <StyledSafeAreaView backgroundColor={backgroundColor}>
      {headerGoBack && (
        <StyledTouchableOpacity onPress={goBack}>
          <Icon name="arrow-back-outline" size={32} />
        </StyledTouchableOpacity>
      )}
      {children}
    </StyledSafeAreaView>
  );
};
