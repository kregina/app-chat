import { Avatar } from '@components/Avatar';
import { dataChat } from '@store/data';

import styles from './Message.module.css';

export const Message = () => {
  return (
    <div className={styles.container} data-testid="message">
      {dataChat.map((message, index) => (
        <div key={index} className={styles.content}>
          <Avatar
            username={message.from_user}
            size="medium"
            isOnline={message.isOnline}
            status={message.status}
          />
          <div>
            <p>{message.from_user}</p>
            <p>{message.text}</p>
            <p>{message.sent_at}</p>
          </div>
        </div>
      ))}
    </div>
  );
};