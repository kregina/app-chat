import { useRef, useState } from 'react';

import { Button } from '@components/Button';
import { EmojiPicker } from '@components/EmojiPicker';
import { Input } from '@components/Input';
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsEnum, StatusMessageEnum } from '@store/enums';
import { useAppState } from '@store/hooks';

import styles from './Footer.module.css';

export const Footer = () => {

  const { state, dispatch } = useAppState();

  const [newMessage, setNewMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const emojiPickerRef = useRef(null);
  const emojiPickerButtonRef = useRef(null);

  const handleOnChange = (message: string) => {
    setNewMessage(message);
  };

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!state.currentUser) return;

    dispatch({
      type: ActionsEnum.ADD_MESSAGE,
      payload: {
        from_user_id: state.currentUser.id,
        from_user: state.currentUser.username,
        from_user_status: state.currentUser.status,
        sent_at: new Date().toISOString(),
        text: newMessage,
        status: StatusMessageEnum.SENT,
      }
    });

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
        <EmojiPicker
          addEmoji={addEmoji}
          emojiPickerRef={emojiPickerRef}
          emojiPickerButtonRef={emojiPickerButtonRef}
          setShowEmojiPicker={setShowEmojiPicker}
        />
      )}

      <form
        onSubmit={sendMessage}
        className={styles.container} data-testid="footer">
        <span
          ref={emojiPickerButtonRef}
          className={styles.emojiButton}
          onClick={toggleEmojiPicker}
          data-testid="emoji-button"
        >
          <FontAwesomeIcon
            data-testid="button-icon"
            icon={faFaceSmile}
            className={styles.icon}
          />
        </span>
        <Input
          id="new-message"
          onValueChange={handleOnChange}
          placeholder="Type new message..."
          value={newMessage}
        />
        <Button className="icon" id="send-message" type="submit">
          <FontAwesomeIcon
            data-testid="button-icon"
            icon={faPaperPlane}
            className={styles.icon}
          />
        </Button>
      </form>
    </>
  );
};

