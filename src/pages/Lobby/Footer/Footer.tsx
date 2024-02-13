import { useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsEnum, StatusMessageEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import { useClickOutside } from '@utils/hooks';

import styles from './Footer.module.css';

export const Footer = () => {
  const { state, dispatch } = useAppState();
  const { theme } = state;

  const [newMessage, setNewMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const emojiPickerRef = useRef(null);

  useClickOutside(emojiPickerRef, () => setShowEmojiPicker(false));

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
    <form
      onSubmit={sendMessage}
      className={styles.container} data-testid="footer">
      <div ref={emojiPickerRef}>
        <span
          className={styles.emojiButton}
          onClick={toggleEmojiPicker}
        >
          {showEmojiPicker && (
            <Picker
              data={data}
              onEmojiSelect={addEmoji}
              className={styles.emojiPicker}
              icons="outline"
              previewEmoji="none"
              theme={theme}
            />
          )}
          <FontAwesomeIcon
            data-testid="button-icon"
            icon={faFaceSmile}
            className={styles.icon}
          />
        </span>
      </div>

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
  );
};

