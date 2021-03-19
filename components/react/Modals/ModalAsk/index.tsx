import React, { FC, PropsWithChildren } from 'react';
import { Button, Modal } from 'components';
import { ButtonColor } from 'types';
import styles from './styles.module.scss';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  btnFirstColor?: ButtonColor,
  btnFirstText?: string,
  btnFirstOnClick?:() => void,
  btnSecondColor?: ButtonColor,
  btnSecondText?: string,
  btnSecondOnClick?: () => void,
}

const ModalAsk: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  btnFirstColor = 'red',
  btnFirstText = 'Yes',
  btnFirstOnClick = () => {},
  btnSecondColor = 'green',
  btnSecondText = 'No',
  btnSecondOnClick = () => {},
  children,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={styles.modal}
    classNameHeader={styles.header}
  >
    {children}
    <div className={styles.btnsModal}>
      <Button
        color={btnFirstColor}
        className={styles.btnModal}
        onClick={btnFirstOnClick}
      >
        {btnFirstText}
      </Button>
      <Button
        color={btnSecondColor}
        className={styles.btnModal}
        onClick={btnSecondOnClick}
      >
        {btnSecondText}
      </Button>
    </div>
  </Modal>
);

export default ModalAsk;
