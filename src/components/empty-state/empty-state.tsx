import React from 'react';
import styled from 'styled-components/native';
import {Button} from '../button';
import {H3} from '../typography/h3';
import {Spacer} from '../spacer';

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

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${({theme}) => theme.Colors.black};
  flex: 1;
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
  <StyledSafeAreaView>
    <EmptyStateContainer>
      <H3 color="white" textAlign="center">
        {title}
      </H3>
      <Spacer size="m" />
      {buttonTitle && onPress && (
        <Button onPress={onPress} title={buttonTitle} />
      )}
    </EmptyStateContainer>
  </StyledSafeAreaView>
);
