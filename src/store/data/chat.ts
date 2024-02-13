import { StatusMessageEnum, UserStatusEnum } from '@store/enums';
import { Message } from '@store/types';

export const dataChat: Message[] = [
  {
    from_user_id: 1,
    from_user: 'Alice',
    sent_at: '2024-02-08T12:00:00Z',
    text: 'Hey everyone, ready for the game? 🎮',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.AVAILABLE,
  },
  {
    from_user_id: 3,
    from_user: 'Charlie',
    sent_at: '2024-02-08T12:01:00Z',
    text: 'Just a sec, finalizing my settings! ⚙️',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.BUSY,
  },
  {
    from_user_id: 4,
    from_user: 'Jenna4',
    sent_at: '2024-02-08T12:01:30Z',
    text: 'All set here. Excited to play! 😄',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.BUSY,
  },
  {
    from_user_id: 7,
    from_user: 'Ulysses7',
    sent_at: '2024-02-08T12:02:00Z',
    text: 'Is everyone here? What about Bob and Walter? 🤔',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.AVAILABLE,
  },
  {
    from_user_id: 9,
    from_user: 'Tina9',
    sent_at: '2024-02-08T12:02:30Z',
    text: 'Bob\'s offline, might be away. Let’s give Walter a few more mins? ⏰',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.AVAILABLE,
  },
  {
    from_user_id: 10,
    from_user: 'Laura10',
    sent_at: '2024-02-08T12:03:00Z',
    text: 'Can’t wait to try out the new map. Has anyone played it yet? 🗺️',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.AVAILABLE,
  },
  {
    from_user_id: 12,
    from_user: 'Ulysses12',
    sent_at: '2024-02-08T12:04:00Z',
    text: 'First time for me. Any tips? 🤷',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.AVAILABLE,
  },
  {
    from_user_id: 5,
    from_user: 'Mia5',
    sent_at: '2024-02-08T12:04:30Z',
    text: 'Stick together and watch for the hidden traps. Learned that the hard way! 😅',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.BUSY,
  },
  {
    from_user_id: 8,
    from_user: 'Bob8',
    sent_at: '2024-02-08T12:05:00Z',
    text: 'Sorry I’m late, had to update my game. I’m in now. 🚀',
    status: StatusMessageEnum.SEEN,
    from_user_status: UserStatusEnum.BUSY,
  }
];
