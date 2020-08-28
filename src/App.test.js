import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

xit('renders learn react link', () => {
  const { getByText } = render(<App />);
  const appHeader = getByText(/choose location/i);
  expect(appHeader).toBeInTheDocument();
});
