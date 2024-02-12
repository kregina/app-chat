import { useState } from 'react';

import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.css';
export const Footer = () => {
  const [newMessage, setNewMessage] = useState<string>('');

  const handleOnChange = (message: string) => {
    setNewMessage(message);
  };

  const handleEmojiClick = () => {
    console.log('emoji');
  };

  return (

    <footer className={styles.container} data-testid="footer">
      <Button className="icon" id="emoji" onClick={handleEmojiClick}>
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
      <Button className="icon" id="send-message" onClick={handleEmojiClick}>
        <FontAwesomeIcon
          data-testid="button-icon"
          icon={faPaperPlane}
          className={styles.icon}
        />
      </Button>
    </footer>
  );
};