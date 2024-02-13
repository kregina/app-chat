import { ActionsEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import { render, fireEvent, act, screen } from '@testing-library/react';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let dispatchMock: jest.Mock<any, any, any>;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppState as jest.Mock).mockReturnValue({
      dispatch: dispatchMock
    });
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  it('renders login container with correct elements', () => {
    render(<Login />);
    const loginContainer = screen.getByTestId('login');
    expect(loginContainer).toBeInTheDocument();
    expect(screen.getByText('The Lobby™')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Choose a cool username!')).toBeInTheDocument();
  });

  it(`dispatches ADD_USER action when 
      enter button is clicked with valid username`, async () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText('Choose a cool username!');
    const enterButton = screen.getByText('Enter');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
      fireEvent.click(enterButton);
    });

    expect(dispatchMock).toHaveBeenCalledWith(expect.objectContaining({
      type: ActionsEnum.ADD_USER,
      // TODO: Add a more specific payload check here
      payload: expect.any(Object)
    }));
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

  it(`navigates to lobby page after 
      dispatching ADD_USER action with valid username`, async () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<Login />);
    const inputElement = screen.getByPlaceholderText('Choose a cool username!');
    const enterButton = screen.getByText('Enter');

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: 'John' } });
      fireEvent.click(enterButton);
    });

    //TODO: Add a more specific navigate check here
    expect(navigateMock).toHaveBeenCalledWith(expect.any(String));
  });
});
