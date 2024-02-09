import { dataChat } from '@store/data';
import { render } from '@testing-library/react';

import { Message } from './Message';
import '@testing-library/jest-dom';

jest.mock('@store/data', () => ({
  dataChat: [
    {
      from_user: 'John',
      text: 'Hello, how are you?',
      sent_at: '2024-02-09T12:00:00Z',
      isOnline: true,
      status: 'AVAILABLE'
    },
    {
      from_user: 'Jane',
      text: 'Hi John! I\'m doing great, thanks for asking.',
      sent_at: '2024-02-09T12:05:00Z',
      isOnline: false,
      status: 'AWAY'
    }
  ]
}));

describe('Message', () => {
  it('renders message container with correct elements', () => {
    const { getByTestId, getAllByTestId } = render(<Message />);

    const messageContainer = getByTestId('message');
    expect(messageContainer).toBeInTheDocument();

    const messageItems = getAllByTestId('message-item');
    expect(messageItems.length).toBe(dataChat.length);
  });

  it('renders correct content for each message', () => {
    const { getByText } = render(<Message />);

    const johnMessage = getByText('Hello, how are you?');
    expect(johnMessage).toBeInTheDocument();

    const janeMessage = getByText('Hi John! I\'m doing great, thanks for asking.');
    expect(janeMessage).toBeInTheDocument();
  });
});
