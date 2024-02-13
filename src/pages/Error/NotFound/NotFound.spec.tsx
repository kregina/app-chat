import { act, fireEvent, render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { NotFound } from './NotFound';

import '@testing-library/jest-dom';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('NotFound', () => {
  it('renders not found container with correct elements', async () => {

    const { container, getByText, getByTestId } = render(<NotFound />);
    await act(async () => container);

    const notFoundContainer = getByTestId('not-found');
    expect(notFoundContainer).toBeInTheDocument();

    const titleElement = getByText('404');
    expect(titleElement).toBeInTheDocument();

    const memeElement = getByText('👁️👄👁️');
    expect(memeElement).toBeInTheDocument();

    const backButton = getByText('Go home');
    expect(backButton).toBeInTheDocument();
  });

  it('navigates to home page when back button is clicked', async () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { container, getByTestId } = render(<NotFound />);
    await act(async () => container);

    const backButton = getByTestId('button-go-home');

    await act(async () => {
      fireEvent.click(backButton);
    });

    expect(navigateMock).toHaveBeenCalledWith('/app-chat');
  });
});
