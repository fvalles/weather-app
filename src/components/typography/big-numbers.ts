import styled from 'styled-components/native';
import {TypographyProps, typographyBaseStyles} from './common';

/**
 * BigNumbers Component
 */

export const BigNumbers = styled.Text<TypographyProps>`
  ${typographyBaseStyles};
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
`;
