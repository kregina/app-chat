import { FC } from 'react';

import { Tooltip } from 'react-tooltip';

import styles from './Tooltip.module.css';

export const StyledTooltip:FC<{id: string}> = ({ id }) => {
  return <Tooltip id={id} className={styles.styled_tooltip} />;  
};