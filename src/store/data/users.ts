import { UserStatusEnum } from '@store/enums';
import { User } from '@store/types';

export const dataUsers: User[] = [
  { id: 1,
    username: 'Alice',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 2,
    username: 'Bob',
    isOnline: false,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.AWAY
  },
  { id: 3,
    username: 'Charlie',
    isOnline: true,
    lastSeenAt: '2021-07-01T12:00:00Z',
    status: UserStatusEnum.BUSY
  },
  { id: 4,
    username: 'Jenna4',
    isOnline: true,
    lastSeenAt: '2024-01-24T17:40:09Z',
    status: UserStatusEnum.BUSY
  },
  { id: 5,
    username: 'Mia5',
    isOnline: true,
    lastSeenAt: '2024-01-17T17:40:09Z',
    status: UserStatusEnum.BUSY
  },
  { id: 6,
    username: 'Walter6',
    isOnline: false,
    lastSeenAt: '2024-01-18T17:40:09Z',
    status: UserStatusEnum.AWAY
  },
  { id: 7,
    username: 'Ulysses7',
    isOnline: true,
    lastSeenAt: '2024-02-05T17:40:09Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 8,
    username: 'Bob8',
    isOnline: true,
    lastSeenAt: '2024-01-19T17:40:09Z',
    status: UserStatusEnum.BUSY
  },
  { id: 9,
    username: 'Tina9',
    isOnline: true,
    lastSeenAt: '2024-02-06T17:40:09Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 10,
    username: 'Laura10',
    isOnline: true,
    lastSeenAt: '2024-01-29T17:40:09Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 11,
    username: 'Charlie11',
    isOnline: false,
    lastSeenAt: '2024-02-03T17:40:09Z',
    status: UserStatusEnum.AWAY
  },
  { id: 12,
    username: 'Ulysses12',
    isOnline: true,
    lastSeenAt: '2024-01-31T17:40:09Z',
    status: UserStatusEnum.AVAILABLE
  },
  { id: 13,
    username: 'Hannah13',
    isOnline: false,
    lastSeenAt: '2024-01-25T17:40:09Z',
    status: UserStatusEnum.BUSY
  }
];