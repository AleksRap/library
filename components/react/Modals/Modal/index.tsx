import React, { FC, useEffect } from 'react';
import cx from 'classnames';
import RModal, { Props as RModalProps } from 'react-modal';
import { H3, Icon } from 'components/index';
import styles from './styles.module.scss';

const ROOT = document.getElementById('root');

interface Props extends RModalProps {
  onClose: () => void;
  title?: string;
  classNameHeader?: string;
}

const Modal: FC<Props> = ({
  onClose,
  title,
  isOpen,
  style,
  portalClassName,
  bodyOpenClassName,
  htmlOpenClassName,
  className,
  classNameHeader,
  appElement,
  onAfterOpen = () => {},
  onAfterClose = () => {},
  closeTimeoutMS,
  aria,
  data,
  role,
  contentLabel,
  contentRef,
  overlayRef,
  testId,
  id,
  children,
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <RModal
      isOpen={isOpen}
      style={style}
      portalClassName={portalClassName}
      bodyOpenClassName={cx(styles.body, bodyOpenClassName)}
      htmlOpenClassName={htmlOpenClassName}
      className={cx(styles.modal, className)}
      overlayClassName={styles.overlay}
      appElement={appElement}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={onClose}
      closeTimeoutMS={closeTimeoutMS}
      ariaHideApp={false}
      shouldFocusAfterRender={false}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      parentSelector={() => ROOT!}
      aria={aria}
      data={data}
      role={role}
      contentLabel={contentLabel}
      contentRef={contentRef}
      overlayRef={overlayRef}
      testId={testId}
      id={id}
    >
      <div
        className={cx(
          styles.header,
          title && styles.withTitle,
          classNameHeader,
        )}
      >
        {title && (
          <H3
            color="basic-900"
            className={styles.title}
          >
            {title}
          </H3>
        )}
        <button
          type="button"
          onClick={onClose}
          className={styles.btnClose}
        >
          <Icon
            value="cross"
            className={styles.iconClose}
          />
        </button>
      </div>
      {children}
    </RModal>
  );
};

export default Modal;
