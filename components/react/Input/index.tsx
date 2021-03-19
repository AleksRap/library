import React, { FC, ChangeEvent } from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import styles from './styles.module.scss';

type Props = {
  id?: string,
  type?: 'text' | 'number' | 'password',
  color?: 'dark' | 'light',
  label?: string,
  name: string,
  value?: string,
  placeholder?: string,
  className?: string,
  classNameInput?: string,
  error?: boolean | string,
  disabled?: boolean,
  isCorrect?: boolean,
  autoComplete?: 'off' | 'on',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
};

const Input:FC<Props> = ({
  id,
  type = 'text',
  color = 'dark',
  label,
  name,
  value,
  placeholder,
  className,
  classNameInput,
  error,
  disabled = false,
  isCorrect = false,
  autoComplete = 'off',
  onChange = () => {},
  required,
}) => (
  <div className={cx(styles.wrap, className)}>
    <label
      className={styles.label}
      htmlFor={id}
    >
      {label && (
        <Text
          tag="span"
          color="basic-900"
          className={styles.labelText}
        >
          {label}
        </Text>
      )}
      <div
        className={cx(
          styles.inputWrap,
          required && styles.required,
        )}
      >
        <input
          id={id || name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          className={cx(
            styles.input,
            styles[color],
            error && styles.error,
            (error || isCorrect) && styles.bigRightPadding,
            classNameInput,
          )}
          onChange={onChange}
        />
      </div>
      {error && (
        <Icon
          value="cross"
          className={cx(
            styles.icon,
            styles.iconError,
          )}
        />
      )}
      {isCorrect && !error && (
        <Icon
          value="checkmark"
          className={cx(styles.icon, styles.iconCorrect)}
        />
      )}
    </label>
    {error && typeof error === 'string' && (
      <span className={styles.textError}>
        {error}
      </span>
    )}
  </div>

);

export default Input;
