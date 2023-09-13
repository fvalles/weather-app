import React from 'react';
import styled from 'styled-components/native';
import {Button} from '../button';
import {Spacer} from '../spacer';
import {SafeArea} from '../safe-area';
import {H3} from '../typography';

/**
 * Styled Components
 */

const EmptyStateContainer = styled.View`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({theme}) => theme.Spacers.xl};
  padding-right: ${({theme}) => theme.Spacers.xl};
`;

/**
 * Types
 */

interface EmptyStateProps {
  buttonTitle?: string;
  onPress?: () => void;
  title: string;
}

/**
 * Empty State Component
 */

export const EmptyState = ({buttonTitle, title, onPress}: EmptyStateProps) => (
  <SafeArea>
    <EmptyStateContainer>
      <H3 textAlign="center">{title}</H3>
      <Spacer size="m" />
      {buttonTitle && onPress && (
        <Button onPress={onPress} title={buttonTitle} />
      )}
    </EmptyStateContainer>
  </SafeArea>
);
