import { useState } from 'react';

import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '@store/hooks';

import styles from './Footer.module.css';

export const Footer = () => {
  const { state } = useAppState();
  const { theme } = state;

  const [newMessage, setNewMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const handleOnChange = (message: string) => {
    setNewMessage(message);
  };

  const sendMessage = () => {
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const addEmoji = (emoji: { native: string }) => {
    setNewMessage((currentMessage) => currentMessage + emoji.native);
  };

  return (
    <>
      {showEmojiPicker && (
        <Picker
          data={data}
          onEmojiSelect={addEmoji}
          className={styles.emojiPicker}
          onClickOutside={() => setShowEmojiPicker(false)}
          icons="outline"
          previewEmoji="none"
          theme={theme}
        />
      )}
      <footer className={styles.container} data-testid="footer">
        <Button
          className="icon"
          id="emoji"
          onClick={toggleEmojiPicker}
        >
          <FontAwesomeIcon
            data-testid="button-icon"
            icon={faFaceSmile}
            className={styles.icon}
          />
        </Button>
        <Input
          id="new-message"
          onValueChange={handleOnChange}
          placeholder="Type new message..."
          value={newMessage}
        />
        <Button className="icon" id="send-message" onClick={sendMessage}>
          <FontAwesomeIcon
            data-testid="button-icon"
            icon={faPaperPlane}
            className={styles.icon}
          />
        </Button>
      </footer>
    </>
  );
};

