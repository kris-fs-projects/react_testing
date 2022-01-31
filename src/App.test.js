import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppConnector } from './connectors/AppConnector';
import { store } from './store/store';

test('renders the app with default state', () => {


  render(<Provider store={store}>
    <AppConnector />
  </Provider>);

  const titleElement = screen.getByText('my record rolodex');
  const artistsLabel = screen.getByText('Artists');
  const recordsLabel = screen.getByText('Records');
  const detailsLabel = screen.getByText('Record Details');
  const copyrightElement = screen.getByText(/Your Friendly Neighbourhood Record Store/i);

  expect(titleElement).toBeInTheDocument();
  expect(artistsLabel).toBeInTheDocument();
  expect(recordsLabel).toBeInTheDocument();
  expect(detailsLabel).toBeInTheDocument();
  expect(copyrightElement).toBeInTheDocument();
});
