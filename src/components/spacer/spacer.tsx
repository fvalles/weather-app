import React from 'react';
import {SizesType} from '../../theme/spacers';
import styled from 'styled-components/native';

/**
 * Types
 */

interface SpacerProps {
  /** Sizes to separate components */
  size?: SizesType;
}

/**
 * Styled Components
 */

const StyledView = styled.View<{size: SizesType}>`
  height: ${({size, theme}) => theme.Spacers[size]};
`;

/**
 * Spacer Component
 */

export const Spacer = ({size = 'm'}: SpacerProps) => <StyledView size={size} />;
