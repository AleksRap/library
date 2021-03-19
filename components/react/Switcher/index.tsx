import React, { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components';
import { SwitcherSize } from 'types';
import styles from './styles.module.scss';

type Props = {
  id: string,
  size?: SwitcherSize,
  name: string,
  label?: string,
  isChecked: boolean,
  onChange?: () => void,
  className?: string,
};

const Switcher:FC<Props> = ({
  id,
  size = 'normal',
  name,
  label,
  isChecked,
  onChange,
  className,
}) => (
  <label
    htmlFor={id}
    className={cx(
      styles.wrap,
      className,
    )}
  >
    <span
      className={cx(
        styles.switcher,
        styles[size],
        isChecked && styles.active,
      )}
    >
      <span className={cx(
        styles.circle,
        styles[size],
        isChecked && styles.active,
      )}
      />
      <input
        id={id || name}
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        hidden
      />
    </span>
    {label && (
      <Text weight="medium" className={styles.label}>{label}</Text>
    )}
  </label>
);

export default Switcher;
