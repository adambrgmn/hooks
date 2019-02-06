import 'jest-dom/extend-expect';
import React, { useEffect } from 'react';
import { render, cleanup, flushEffects } from 'react-testing-library';
import { useIsMounted } from '../use-is-mounted';

afterEach(cleanup);

const TestComponent = ({
  fn,
  delay,
}: {
  fn: () => void;
  delay: number;
}): JSX.Element => {
  const isMounted = useIsMounted();

  useEffect(() => {
    /**
     * Note that the better way to solve this exact problem is to actually
     * cancel the timeout in the returning function provided to useEffect.
     */
    setTimeout(() => isMounted() && fn(), delay);
  }, []);

  return <p />;
};

it('should return a boolean indicating if the component is still mounted', () => {
  jest.useFakeTimers();
  const mock = jest.fn();
  const delay = 1000;
  const { unmount } = render(<TestComponent fn={mock} delay={delay} />);

  flushEffects();
  unmount();

  jest.advanceTimersByTime(delay);
  expect(mock).not.toHaveBeenCalled();
});
