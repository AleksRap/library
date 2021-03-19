import React, { FC } from 'react';
import { Icon } from 'components';
import cx from 'classnames';
import styles from './styles.module.scss';

type PropsArrowLabel = {
  direction?: 'left' | 'right'
};

const ArrowLabel: FC<PropsArrowLabel> = ({
  direction = 'left',
}) => (
  <Icon
    value="arrow"
    className={cx(
      styles.arrow,
      styles[direction],
    )}
  />
);

export default ArrowLabel;
