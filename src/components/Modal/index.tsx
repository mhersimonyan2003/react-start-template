import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './index.module.scss';

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
        <div className={s.modal__card__header}>
          {title && <h4 className={s.modal__card_header__title}>{title}</h4>}
          <div className={s.modal__card__close} onClick={closeModal} />
        </div>
        <div className={s.modal__card__content}>{children}</div>
      </div>
    </div>,
    container
  );
};
