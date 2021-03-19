import React, { FC, ChangeEvent, ReactNode } from 'react';
import cx from 'classnames';
import { Text } from 'components';
import styles from './styles.module.scss';

type Props = {
  name: string,
  checked?: boolean,
  error?: boolean | string,
  label?: string | ReactNode,
  disabled?: boolean,
  className?: string,
  classNameLabel?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: boolean) => void,
};

const Checkbox: FC<Props> = ({
  name,
  checked = false,
  error = '',
  label = '',
  disabled = false,
  className,
  classNameLabel,
  onChange = () => {},
}) => (
  <div className={cx(styles.wrap, className)}>
    <label htmlFor={name} className={cx(styles.checkbox)}>
      <input
        type="checkbox"
        disabled={disabled}
        id={name}
        checked={checked}
        className={cx(
          styles.input,
          error && styles.errorCheckbox,
        )}
        onChange={(e) => onChange(e, !checked)}
      />
      <span className={cx(
        styles.checkmark,
        error && styles.error,
      )}
      />
      {label && (
        <span
          className={cx(
            styles.text,
            error && styles.error,
            classNameLabel,
          )}
        >
          {label}
        </span>
      )}
    </label>
    {error && <Text className={styles.errorText} size="small" color="error" tag="span">{error}</Text>}
  </div>
);

export default Checkbox;
