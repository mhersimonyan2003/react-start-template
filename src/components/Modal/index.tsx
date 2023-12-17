import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

import s from './index.module.scss';
import { createPortal } from 'react-dom';

interface Props {
  container?: HTMLElement;
  title?: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal: React.FC<Props> = ({ container = document.body, title, visible, setVisible, children }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const closeModal = () => {
    setVisible(false);
  };

  return createPortal(
    <div className={s.modal} hidden={!visible}>
      <div className={s.modal__backdrop} />
      <div className={s.modal__card}>
        {title && <h4 className={s.modal__card_title}>{title}</h4>}
        <div className={s.modal__card__close} onClick={closeModal} />
        {children}
      </div>
    </div>,
    container
  );
};
