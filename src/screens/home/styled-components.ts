import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const CityImageContainer = styled.ImageBackground`
  border-radius: 10px;
  height: 88px;
`;

export const CityNameContainer = styled.View`
  margin-top: ${({theme}) => theme.Spacers.xs};
  padding-left: ${({theme}) => theme.Spacers.xs};
`;

export const ScreenContainer = styled.View`
  flex: 1;
  padding-bottom: ${({theme}) => theme.Spacers.xs};
  padding-left: ${({theme}) => theme.Spacers.s};
  padding-right: ${({theme}) => theme.Spacers.s};
  padding-top: ${({theme}) => theme.Spacers.s};
`;

export const TitleContainer = styled.View`
  margin-bottom: ${({theme}) => theme.Spacers.m};
`;
