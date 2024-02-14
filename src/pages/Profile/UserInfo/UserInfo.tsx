import { ActionsEnum, UserStatusEnum } from '@store/enums';
import { useAppState } from '@store/hooks';
import Select from 'react-select';

import styles from './UserInfo.module.css';
import { UserName } from './UserName';

export const UserInfo = () => {
  const { state, dispatch } = useAppState();

  const options = [
    { value: UserStatusEnum.AVAILABLE, label: UserStatusEnum.AVAILABLE },
    { value: UserStatusEnum.AWAY, label: UserStatusEnum.AWAY },
    { value: UserStatusEnum.BUSY, label: UserStatusEnum.BUSY }
  ];

  return (
    <div className={styles.content}>
      <UserName />

      <Select
        className={styles.status}
        options={options}
        isSearchable={false}
        defaultValue={options.find((option) => option.value === state.currentUser?.status)}
        onChange={(option) => {
          dispatch({
            type: ActionsEnum.SET_USER,
            payload: {
              id: state.currentUser?.id || 0,
              isOnline: true,
              username: state.currentUser?.username || '',
              status: option?.value || options[0].value,
              lastSeenAt: new Date().toISOString(),
            },
          });
        }}
      />

      <small>
        {state.currentUser?.lastSeenAt
        && `Last seen at: ${new Date(state.currentUser.lastSeenAt).toLocaleDateString()}`}
      </small>
    </div>
  );
};