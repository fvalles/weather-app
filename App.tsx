import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';
import {Colors} from './src/theme/colors';
import {Spacers} from './src/theme/spacers';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './src/stacks/home-stack';

const queryClient = new QueryClient();

/**
 * App
 */

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{Colors, Spacers}}>
        <HomeStack />
      </ThemeProvider>
    </QueryClientProvider>
  </NavigationContainer>
);

export default App;
