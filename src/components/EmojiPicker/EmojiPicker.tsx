
import { useEffect } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useAppState } from '@store/hooks';

import styles from './EmojiPicker.module.css';

interface EmojiPickerProps {
  addEmoji: (emoji: { native: string }) => void;
  emojiPickerRef: React.RefObject<HTMLDivElement>;
  emojiPickerButtonRef?: React.RefObject<HTMLButtonElement>;
  setShowEmojiPicker: (show: boolean) => void;
}

export const EmojiPicker = (props: EmojiPickerProps) => {
  const { addEmoji, emojiPickerRef, emojiPickerButtonRef, setShowEmojiPicker } = props;
  const { state } = useAppState();
  const { theme } = state;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!emojiPickerRef.current || !emojiPickerButtonRef?.current) return;

      if (!(emojiPickerRef.current as HTMLElement).contains(event.target as Node)
      && !(emojiPickerButtonRef.current as HTMLElement).contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [emojiPickerRef, emojiPickerButtonRef, setShowEmojiPicker]);

  return (
    <div
      ref={emojiPickerRef}
      className={styles.emojiPicker}
      data-testid="emoji-picker"
    >
      <Picker
        data={data}
        onEmojiSelect={addEmoji}
        icons="outline"
        previewEmoji="none"
        theme={theme}
      />
    </div>
  );
};