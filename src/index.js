import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppConnector } from './connectors/AppConnector';

// import * as rtl from '@testing-library/react';
// import * as ue from '@testing-library/user-event';
// console.log('react-testing-library ', rtl);
// console.log('user-event ', ue);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppConnector />
    </Provider>
  </StrictMode>
);
