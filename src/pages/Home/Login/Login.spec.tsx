import { dataChat, dataUsers } from '@store/data';
import { ActionsEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Login } from './Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

jest.mock('@store/hooks', () => ({
  useAppState: jest.fn()
}));

describe('Login', () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppState as jest.Mock).mockReturnValue({
      dispatch: dispatchMock,
      state: {
        theme: 'light',
        users: dataUsers,
        messages: dataChat,
      },
    });

    (useNavigate as jest.Mock).mockReset().mockReturnValue(jest.fn());
  });

  it('renders login container with correct elements', () => {
    render(<Login />);
    const loginContainer = screen.getByTestId('login');
    expect(loginContainer).toBeInTheDocument();
    expect(screen.getByText('The Lobby™')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Choose a cool username!')).toBeInTheDocument();
  });

  it(`dispatches ADD_USER action with correct payload 
      when enter button is clicked with valid username`, async () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText('Choose a cool username!');
    const enterButton = screen.getByText('Enter');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'Alice' } });
      fireEvent.click(enterButton);
    });

    expect(dispatchMock).toHaveBeenCalledWith({
      type: ActionsEnum.ADD_USER,
      //TODO: Fix the payload type
      payload: expect.any(Object)
    });
  });

  it(`does not dispatch ADD_USER action when 
      enter button is clicked with invalid username`, async () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText('Choose a cool username!');
    const enterButton = screen.getByText('Enter');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'Jo' } });
      fireEvent.click(enterButton);
    });

    expect(dispatchMock).not.toHaveBeenCalled();
  });

  it(`navigates to lobby page after dispatching 
      ADD_USER action with valid username`, async () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<Login />);
    const inputElement = screen.getByPlaceholderText('Choose a cool username!');
    const enterButton = screen.getByText('Enter');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
      fireEvent.click(enterButton);
    });

    expect(navigateMock).toHaveBeenCalledWith('/app-chat/lobby');
  });
});
