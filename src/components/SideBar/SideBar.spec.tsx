import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SideBar } from '.';

describe('SideBar Component', () => {
  const title = 'Test Title';
  const childText = 'This is a child component';

  it('renders the SideBar with a title and content', () => {
    render(
      <SideBar title={title}>
        <p>{childText}</p>
      </SideBar>
    );

    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByText(childText)).toBeInTheDocument();

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
