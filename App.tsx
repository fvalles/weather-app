import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Home} from './src/screens/home';
import {ThemeProvider} from 'styled-components';
import {Colors} from './src/theme/colors';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={{Colors}}>
      <Home />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
