import './index.css';
import App from 'app';
import React from 'react';
import { store } from 'reduxtoolkit/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-lazy-load-image-component/src/effects/blur.css';

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
