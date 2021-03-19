import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  isLoading: boolean,
  className?: string,
}

const Preloader: FC<PropsWithChildren<Props>> = ({
  isLoading,
  className,
  children,
}) => (
  isLoading
    ? (
      <div className={cx(styles.preloaderWrap, className)}>
        <div className={styles.preloader}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
    : <>{children}</>
);

export default Preloader;
