import { render, fireEvent } from '@testing-library/react';
import * as hooks from '@utils/hooks';

import { SideBar } from './SideBar';
import '@testing-library/jest-dom';

jest.mock('@utils/hooks', () => ({
  ...jest.requireActual('@utils/hooks'),
  useIsMobile: jest.fn(),
}));

describe('SideBar', () => {
  it('renders sidebar container with search and users list', () => {
    const { getByTestId } = render(<SideBar />);
    const sideBarContainer = getByTestId('sidebar');
    expect(sideBarContainer).toBeInTheDocument();

    const searchElement = getByTestId('search');
    expect(searchElement).toBeInTheDocument();

    const usersListElement = getByTestId('users-list-container');
    expect(usersListElement).toBeInTheDocument();
  });

  it('filters users when search term changes', () => {
    const { getByPlaceholderText, queryByText } = render(<SideBar />);
    const inputElement = getByPlaceholderText('Search an user...');

    fireEvent.change(inputElement, { target: { value: 'Alice' } });

    expect(queryByText('Alice')).toBeInTheDocument();
    expect(queryByText('Jane')).not.toBeInTheDocument();
  });

  it('displays online and offline users lists on non-mobile view', () => {
    (hooks.useIsMobile as jest.Mock).mockReturnValue(false);

    const { getByText } = render(<SideBar />);
    const onlineUsersTitle = getByText('Online');
    const offlineUsersTitle = getByText('Offline');

    expect(onlineUsersTitle).toBeInTheDocument();
    expect(offlineUsersTitle).toBeInTheDocument();
  });

  it('displays all users in a single list on mobile view', () => {

    (hooks.useIsMobile as jest.Mock).mockReturnValue(true);

    const { getByTestId, queryByText } = render(<SideBar />);
    const usersListContainer = getByTestId('users-list-container');

    expect(usersListContainer).toBeInTheDocument();

    expect(queryByText('Online')).not.toBeInTheDocument();
    expect(queryByText('Offline')).not.toBeInTheDocument();
  });


});
