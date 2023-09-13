import styled from 'styled-components/native';
import {TypographyProps, typographyBaseStyles} from './common';

/**
 * H1 Component
 */

export const H1 = styled.Text<TypographyProps>`
  ${typographyBaseStyles};
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
`;
