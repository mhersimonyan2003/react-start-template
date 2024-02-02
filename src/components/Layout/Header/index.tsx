import React from 'react';
import { Logo } from '@/components';
import { ThemeToggle } from './ThemeToggle';
import { LocalizationToggle } from './LocalizationToggle';
import { Navbar } from './Navbar';
import { Logout } from './Logout';

import s from './index.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Navbar />
      <div className={s.header__controls}>
        <LocalizationToggle />
        <ThemeToggle />
        <Logout />
      </div>
    </div>
  );
};
