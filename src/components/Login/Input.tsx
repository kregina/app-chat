import { FC } from "react";

interface InputProps {
  username: string;
  onUsernameChange: (username: string) => void;
  message: string;
}

export const Input: FC<InputProps> = ({ username, onUsernameChange, message }) => (
  <label htmlFor="username">
    <input
      type="text"
      id="username"
      autoFocus
      onChange={(e) => onUsernameChange(e.target.value.trim())}
      autoComplete="off"
      value={username}
      data-cy="username-input"
      placeholder="Choose a cool username!"
    />
    <small>{message}</small>
  </label>
);