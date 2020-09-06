import React from 'react';
import { render, screen, fireEvent } from 'test/helpers/renderWithRedux';

import Component from './SearchResults';

const results = [
  { title: 'London' },
  { title: 'Barcelona' },
  { title: 'Long Beach' },
];

const initialState = {
  search: { results, term: 'Lon' },
  location: { id: null, details: null },
};

xtest('Search term is higlighted with <mark> tag on every given location name', () => {
  const { container } = render(<Component />, {
    initialState,
  });

  const marks = container.querySelectorAll('mark');
  expect(marks).toHaveLength(3);
});

xtest('Higlight selected location', () => {
  const handleChooseLocation = jest.fn();

  render(<Component />, {
    initialState,
  });

  const choosenLocation = screen.getByRole('button', { name: /lon don/i });
  fireEvent.click(choosenLocation);

  expect(handleChooseLocation).toHaveBeenCalledTimes(1);
});
