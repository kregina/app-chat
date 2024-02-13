import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Chat } from './Chat';

jest.mock('@store/hooks', () => ({
  useAppState: () => ({
    state: { theme: 'light' },
  }),
}));

describe('Chat', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('renders chat container with correct title', () => {
    const { getByTestId, queryByText } = render(<Chat />);
    const chatContainer = getByTestId('chat');
    expect(chatContainer).toBeInTheDocument();

    const titleElement = queryByText(/The Lobby™/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders Message component inside the chat container', () => {
    const { getByTestId, queryByTestId } = render(<Chat />);
    const chatContainer = getByTestId('chat');
    const messageComponent = queryByTestId('message');
    const footerComponent = queryByTestId('footer');

    expect(chatContainer).toBeInTheDocument();
    expect(messageComponent).toBeInTheDocument();
    expect(footerComponent).toBeInTheDocument();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
