import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { EmojiPicker } from './EmojiPicker';

jest.mock('@store/hooks', () => ({
  useAppState: () => ({
    state: {
      theme: 'light',
    },
  }),
}));

jest.mock('@emoji-mart/react', () =>
  (props: { onEmojiSelect: (arg0: { native: string; }) => void; }) => (
    <div onClick={() => props.onEmojiSelect({ native: 'emoji' })}>EmojiPickerMock</div>
  ));
jest.mock('@emoji-mart/data', () => {});

describe('EmojiPicker', () => {
  const mockAddEmoji = jest.fn();
  const mockSetShowEmojiPicker = jest.fn();
  const emojiPickerRef = { current: document.createElement('div') };
  const emojiPickerButtonRef = { current: document.createElement('button') };

  test('renders the emoji picker', () => {
    render(
      <EmojiPicker
        addEmoji={mockAddEmoji}
        emojiPickerRef={emojiPickerRef}
        emojiPickerButtonRef={emojiPickerButtonRef}
        setShowEmojiPicker={mockSetShowEmojiPicker}
      />
    );

    expect(screen.getByText('EmojiPickerMock')).toBeInTheDocument();
  });

  test('calls setShowEmojiPicker with false when clicking outside', () => {
    render(
      <EmojiPicker
        addEmoji={mockAddEmoji}
        emojiPickerRef={emojiPickerRef}
        emojiPickerButtonRef={emojiPickerButtonRef}
        setShowEmojiPicker={mockSetShowEmojiPicker}
      />
    );

    fireEvent.mouseDown(document);

    expect(mockSetShowEmojiPicker).toHaveBeenCalledWith(false);
  });

  test('calls addEmoji when an emoji is selected', () => {
    render(
      <EmojiPicker
        addEmoji={mockAddEmoji}
        emojiPickerRef={emojiPickerRef}
        emojiPickerButtonRef={emojiPickerButtonRef}
        setShowEmojiPicker={mockSetShowEmojiPicker}
      />
    );

    fireEvent.click(screen.getByText('EmojiPickerMock'));

    expect(mockAddEmoji).toHaveBeenCalledWith({ native: 'emoji' });
  });
});
