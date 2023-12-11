import React from 'react';
import Logo from '../../Logo';
import { ThemeToggle } from './ThemeToggle';
import { LocalizationToggle } from './LocalizationToggle';

import s from './index.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <div className={s.header__controls}>
        <LocalizationToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};
