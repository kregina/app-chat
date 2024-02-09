
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Lobby from './Lobby';

describe('Page Lobby', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Lobby />
      </Router>
    );
    expect(screen.getByTestId('lobby')).toBeInTheDocument();
  });

  it('contains navigation, sidebar, and chat components', () => {
    render(
      <Router>
        <Lobby />
      </Router>
    );
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('chat')).toBeInTheDocument();
  });
});
