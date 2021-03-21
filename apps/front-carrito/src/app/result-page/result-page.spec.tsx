import React from 'react';
import { render } from '@testing-library/react';

import ResultPage from './result-page';

describe('ResultPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultPage />);
    expect(baseElement).toBeTruthy();
  });
});
