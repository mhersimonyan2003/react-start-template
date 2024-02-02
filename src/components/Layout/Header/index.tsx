import React from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { Logo } from '@/components';
import { ThemeToggle } from './ThemeToggle';
import { LocalizationToggle } from './LocalizationToggle';
import { Navbar } from './Navbar';
import { Logout } from './Logout';

import s from './index.module.scss';

export const Header = () => {
  const token = useAppSelector(tokenSelectors.get);

  return (
    <div className={s.header}>
      <Logo />
      <Navbar />
      <div className={s.header__controls}>
        <LocalizationToggle />
        <ThemeToggle />
        {Boolean(token) && <Logout />}
      </div>
    </div>
  );
};
