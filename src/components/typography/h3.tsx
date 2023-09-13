import styled from 'styled-components/native';
import {typographyBaseStyles, TypographyProps} from './common';

/**
 * H3 Component
 */

export const H3 = styled.Text<TypographyProps>`
  ${typographyBaseStyles};
  font-size: 16px;
  line-height: 22px;
`;
