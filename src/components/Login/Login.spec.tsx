import { UserActionsEnum } from '@store/enums';
import { useUser } from '@store/hooks';
import { render, fireEvent, act } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

import { Login } from './Login';

jest.mock('@store/hooks');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));
jest.mock('@components/Theme/useTheme', () => ({
  useTheme: () => ({ theme: 'dark' })
}));

describe('Login', () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      dispatch: jest.fn()
    });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  it('renders login container with correct elements', () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(<Login />);
    const loginContainer = getByTestId('login');
    expect(loginContainer).toBeInTheDocument();

    expect(getByText('The Lobby™')).toBeInTheDocument();
    expect(getByPlaceholderText('Choose a cool username!')).toBeInTheDocument();
  });

  it(`dispatches JOIN action when enter 
      button is clicked with valid username`, async () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />);

    const inputElement =
      getByPlaceholderText('Choose a cool username!') as HTMLInputElement;
    const enterButton = getByTestId('button-login');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
      fireEvent.click(enterButton);
    });

    expect(useUser().dispatch).toHaveBeenCalledWith({
      type: UserActionsEnum.JOIN,
      payload: {
        username: 'John',
        avatar: 'avatar_url'
      }
    });
  });

  it(`does not dispatch JOIN action when enter 
      button is clicked with invalid username`, async () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />);
    const inputElement =
      getByPlaceholderText('Choose a cool username!') as HTMLInputElement;
    const enterButton = getByTestId('button-login');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'Jo' } });
      fireEvent.click(enterButton);
    });

    expect(useUser().dispatch).not.toHaveBeenCalled();
  });

  it(`navigates to lobby page after dispatching 
      JOIN action with valid username`, async () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByTestId, getByPlaceholderText } = render(<Login />);
    const inputElement =
      getByPlaceholderText('Choose a cool username!') as HTMLInputElement;
    const enterButton = getByTestId('button-login');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
      fireEvent.click(enterButton);
    });

    expect(navigateMock).toHaveBeenCalled();
  });
});
