import 'jest-dom/extend-expect';
import * as React from 'react';
import { render, cleanup, flushEffects } from 'react-testing-library';
import { useMediaQuery } from '../use-media-query';

afterEach(cleanup);

const TestComponent = ({ query }: { query: string }) => {
  const matches = useMediaQuery(query);
  return <p>{matches ? 'true' : 'false'}</p>;
};

it('should test if a media query is satisfied', () => {
  const { getByText } = render(<TestComponent query="(max-width: 400px)" />);
  flushEffects();

  expect(getByText(/true/)).toBeInTheDocument();
});