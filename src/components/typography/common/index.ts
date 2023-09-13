import {css} from 'styled-components/native';

import {TextStyle} from 'react-native';
import {KeyColors} from '../../../theme/colors';

interface Colors {
  color?: KeyColors;
}

export const typographyBaseStyles = css<
  Pick<TextStyle, 'textAlign' | 'textTransform'> & Colors
>`
  ${({textAlign = 'left', textTransform = 'none', color = 'white', theme}) => `
  text-align: ${textAlign};
  text-transform: ${textTransform};
  color: ${theme.Colors[color]};
  `}
`;

export type TypographyProps = Pick<
  TextStyle,
  'textAlign' | 'textTransform' | 'testID'
> &
  Colors;
