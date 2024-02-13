import { useEffect, useRef } from 'react';

import { Avatar } from '@components/Avatar';
import { useAppState } from '@store/hooks';
import { Message as MessageState } from '@store/types';
import { assignColorToUser } from '@utils/user';

import styles from './Message.module.css';

export const Message = () => {
  const { state } = useAppState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const getUserFromMessage = (message: MessageState) =>
    state.users.find((user) => user.id === message.from_user_id);

  const isMessageFromCurrentUser = (message: MessageState) =>
    message.from_user_id === state.currentUser?.id;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isOnline = (message: MessageState) =>
    getUserFromMessage(message)?.isOnline ?? state.currentUser?.isOnline;

  return (
    <div className={styles.container} data-testid="message">
      {state.messages?.map((message, index) => {
        const userColor = assignColorToUser(message.from_user_id);
        const messageDate = new Date(message.sent_at).toLocaleDateString();

        return (
          <div
            key={index}
            className={`${styles.content} 
            ${isMessageFromCurrentUser(message) ? styles.right : ''}`}
            data-testid="message-item"
          >
            <Avatar
              username={message.from_user}
              size="medium"
              status={message.from_user_status}
              isOnline={isOnline(message)}
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
