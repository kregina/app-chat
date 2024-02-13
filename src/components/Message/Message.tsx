import { useEffect, useRef } from 'react';

import { Avatar } from '@components/Avatar';
import { useAppState } from '@store/hooks';
import { assignColorToUser } from '@utils/user';

import styles from './Message.module.css';

export const Message = () => {
  const { state } = useAppState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className={styles.container} data-testid="message">
      {state.messages.map((message, index) => {
        const userColor = assignColorToUser(message.from_user_id);

        return (
          <div key={index} className={styles.content} data-testid="message-item">
            <Avatar
              username={message.from_user}
              size="medium"
              isOnline={message.isOnline}
              status={message.status}
            />
            <div className={styles.box}>
              <p style={{ color: userColor }}>{message.from_user}</p>
              <p>{message.text}</p>
              <small>{new Date(message.sent_at).toLocaleDateString()}</small>
            </div>
          </div>
        );})}
      <div ref={messagesEndRef} />
    </div>
  );
};