import { render } from '@testing-library/react';

import WebLibrary from './web-library';

describe('WebLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
