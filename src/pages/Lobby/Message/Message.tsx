import { useEffect, useRef, useCallback, useState } from 'react';

import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '@store/hooks';
import { assignColorToUser,
  getUserFromMessage,
  isMessageFromCurrentUser,
  isUserOnline } from '@utils/user';

import styles from './Message.module.css';

export const Message = () => {
  const { state } = useAppState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToBottom = useCallback(() => {
    setShowScrollButton(false);
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const atTop =
          containerRef.current.scrollHeight - containerRef.current.scrollTop
          !== containerRef.current.clientHeight;

        setShowScrollButton(atTop);
      }
    };

    const scrollContainer = containerRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  return (
    <div className={styles.container} data-testid="message" ref={containerRef}>
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

      {showScrollButton && (
        <div className={styles.scrollButton}>
          <Button
            className="icon"
            id="send-message"
            type="button"
            onClick={scrollToBottom}>
            <FontAwesomeIcon
              data-testid="button-icon"
              icon={faDownLong}
            />
          </Button>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
