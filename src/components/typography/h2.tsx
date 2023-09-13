import styled from 'styled-components/native';
import {TypographyProps, typographyBaseStyles} from './common';

/**
 * H2 Component
 */

export const H2 = styled.Text<TypographyProps>`
  ${typographyBaseStyles};
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
