import { useEffect, useRef, useCallback } from 'react';

import { Avatar } from '@components/Avatar';
import { useAppState } from '@store/hooks';
import { assignColorToUser,
  getUserFromMessage,
  isMessageFromCurrentUser,
  isUserOnline } from '@utils/user';

import styles from './Message.module.css';

export const Message = () => {
  const { state } = useAppState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  return (
    <div className={styles.container} data-testid="message">
      {state.messages?.map((message, index) => {

        const userColor = assignColorToUser(message.from_user_id);
        const messageDate = new Date(message.sent_at).toLocaleDateString();
        const user = getUserFromMessage(state.users, message.from_user_id);
        const contentStyle =
          isMessageFromCurrentUser(state.currentUser?.id, message.from_user_id)
            ? `${styles.content} ${styles.right}`
            : styles.content;

        return (
          <div
            key={index}
            className={contentStyle}
            data-testid="message-item">
            <Avatar
              username={message.from_user}
              size="medium"
              status={message.from_user_status}
              isOnline={isUserOnline(user, state.currentUser)}
            />
            <div className={styles.box}>
              <p style={{ color: userColor }}>{message.from_user}</p>
              <p>{message.text}</p>
              <small>{messageDate}</small>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};
