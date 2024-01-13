import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navbarItems } from './constants';
import { tokenSelectors } from '@/store/token';

import s from './index.module.scss';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const token = useSelector(tokenSelectors.get);

  return (
    <nav className={s.navbar}>
      {navbarItems
        .filter(({ withAuth }) => token || !withAuth)
        .map(({ key, href }) => (
          <Link to={href} className={s.navbar__item} key={href}>
            {t(key)}
          </Link>
        ))}
    </nav>
  );
};
