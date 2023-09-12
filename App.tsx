import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Home} from './src/screens/home';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

export default App;
