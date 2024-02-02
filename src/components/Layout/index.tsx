import React, { ReactNode } from 'react';
import { useAuth } from '@/hooks';
import { Header } from './Header';

import s from './index.module.scss';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  useAuth();

  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  );
};
