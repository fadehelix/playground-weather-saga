import React from 'react';
import { render, screen } from '@testing-library/react';
import withMarkup from 'test/helpers/withMarkup';
import Component from './Detail';

test('renders Details title and value based on given props', () => {
  const titleProp = 'Temp';
  const valueProp = 26;
  const valueSuffixProp = '&#8451;';

  render(
    <Component
      title={titleProp}
      value={valueProp}
      valueSuffix={valueSuffixProp}
    />
  );

  const outputValue = `${valueProp} ${valueSuffixProp}`;
  const getByTextWithMarkup = withMarkup(screen.getByText);
  const value = getByTextWithMarkup(outputValue);

  expect(value).toHaveTextContent(`${valueProp} ${valueSuffixProp}`);

  const outputTitle = screen.getByText(new RegExp(titleProp, 'i'));
  expect(outputTitle).toHaveTextContent(titleProp);
});
