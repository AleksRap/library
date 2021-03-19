import React, { FC, useCallback, ChangeEvent } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  id: string,
  name: string,
  value: string,
  disabled?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
};

const Radio: FC<Props> = ({
  id,
  name,
  value,
  disabled,
  onChange = () => {},
  className,
}) => {
  const handleChange = useCallback((e) => onChange(e), [value]);

  return (
    <label
      className={className}
      htmlFor={id}
    >
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        hidden
        className={styles.input}
        onChange={handleChange}
      />

      <div
        className={cx(
          styles.circle,
          disabled && styles.disabled,
        )}
      >
        <div className={styles.dot} />
      </div>
    </label>
  );
};

export default Radio;
