import React from 'react';
import styled from 'styled-components/native';
import {H2} from '../typography';
import {KeyColors} from '../../theme/colors';

/**
 * Types
 */

interface ButtonProps {
  /** Background color */
  backgroundColor?: KeyColors;
  /** Title color */
  color?: KeyColors;
  /** onPress hanlder function */
  onPress: () => void;
  /** Button text title */
  title: string;
}

/**
 * Styled Components
 */

const ButtonContainer = styled.TouchableOpacity<{backgroundColor: KeyColors}>`
  align-items: center;
  background-color: ${({backgroundColor, theme}) =>
    theme.Colors[backgroundColor]};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  padding-right: ${({theme}) => theme.Spacers.s};
  padding-left: ${({theme}) => theme.Spacers.s};
`;

/**
 * Button Component
 */

export const Button = ({
  backgroundColor = 'icelandicWater',
  color = 'white',
  onPress,
  title,
}: ButtonProps) => (
  <ButtonContainer backgroundColor={backgroundColor} onPress={onPress}>
    <H2 color={color}>{title}</H2>
  </ButtonContainer>
);
