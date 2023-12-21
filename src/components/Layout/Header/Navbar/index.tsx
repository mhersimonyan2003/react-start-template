import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navbarItems } from './constants';

import s from './index.module.scss';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={s.navbar}>
      {navbarItems.map(({ key, href }) => (
        <Link to={href} className={s.navbar__item} key={href}>
          {t(key)}
        </Link>
      ))}
    </nav>
  );
};
