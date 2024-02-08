import { FC } from "react";

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};