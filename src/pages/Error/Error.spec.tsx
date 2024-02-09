
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { act, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Error from './Error';


describe('Page Error', () => {
  it('renders without crashing and contains not-found component', async () => {
    const { container } = render(
      <Router>
        <Error />
      </Router>
    );
    await act( async () => container);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
