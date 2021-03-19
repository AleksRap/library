import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { ButtonColor, ButtonSize } from 'types';
import styles from './styles.module.scss';

type PropsButton = {
  color?: ButtonColor,
  size?: ButtonSize,
  isFullWidth?: boolean,
  className?: string,
  onClick?: (event: React.MouseEvent) => void,
  type?: 'button' | 'submit',
  disabled?: boolean,
};

const Button: FC<PropsWithChildren<PropsButton>> = ({
  color = 'green',
  size = 'normal',
  isFullWidth = false,
  onClick = () => {},
  className,
  type = 'button',
  children,
  disabled,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    className={cx(
      styles.button,
      styles[size],
      styles[color],
      className,
      {
        [styles.isFullWidth]: isFullWidth,
      },
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
