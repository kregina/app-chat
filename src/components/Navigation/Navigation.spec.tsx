import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { Navigation } from './Navigation';

import '@testing-library/jest-dom';

describe('Navigation', () => {
  const childText = 'This is a child component';

  it('renders the SideBar with a title and content', () => {
    render(
      <MemoryRouter>
        <Navigation>
          <p>{childText}</p>
        </Navigation>
      </MemoryRouter>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
});
