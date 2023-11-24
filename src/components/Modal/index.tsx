import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

import s from './index.module.scss';
import { createPortal } from 'react-dom';

interface Props {
  container?: HTMLElement;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal: React.FC<Props> = ({ container = document.body, visible, setVisible, children }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [visible]);

  const closeModal = () => {
    setVisible(false);
  };

  return createPortal(
    <div className={s.modal} hidden={!visible}>
      <div className={s.modal__backdrop} />
      <div className={s.modal__card}>
        <div className={s.modal__card__close} onClick={closeModal} />
        {children}
      </div>
    </div>,
    container
  );
};
