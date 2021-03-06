import * as React from 'react';

import { useCheckbox } from '../use-checkbox';
import { useLockBodyScroll } from './';

const UseLockBodyScrollExample = (): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);
  const checkbox = useCheckbox(false);
  useLockBodyScroll(checkbox.checked, ref);

  return (
    <div ref={ref} style={{ height: 200, overflow: 'scroll' }}>
      <div style={{ height: '100vh' }}>
        <input type="checkbox" id="checkbox" {...checkbox} />{' '}
        <label htmlFor="checkbox">Lock body scroll</label>
      </div>
    </div>
  );
};

export { UseLockBodyScrollExample };
