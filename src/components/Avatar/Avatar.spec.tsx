import { UserStatusEnum } from '@store/enums';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with correct username and alt text', () => {
    const username = 'john_doe';
    const size = 'medium';
    const status = UserStatusEnum.AVAILABLE;
    const isOnline = true;

    const { getByAltText } = render(
      <Avatar username={username} size={size} status={status} isOnline={isOnline} />
    );

    const avatarImage = getByAltText(`${username} avatar`);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', `https://robohash.org/${username}?set=set4`);
  });

  it('renders with correct class names when online', () => {
    const username = 'jane_doe';
    const size = 'large';
    const status = UserStatusEnum.BUSY;
    const isOnline = true;

    const { container } = render(
      <Avatar username={username} size={size} status={status} isOnline={isOnline} />
    );

    const avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass('avatar', 'large', 'Busy');
  });

  it('renders with correct class names when offline', () => {
    const username = 'jane_doe';
    const size = 'small';
    const status = UserStatusEnum.AWAY;
    const isOnline = false;

    const { container } = render(
      <Avatar username={username} size={size} status={status} isOnline={isOnline} />
    );

    const avatarContainer = container.firstChild as HTMLElement;
    expect(avatarContainer).toHaveClass('avatar', 'small');
    expect(avatarContainer).not.toHaveClass('Away');
  });
});
