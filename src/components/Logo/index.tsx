import React from 'react';
import { Link } from 'react-router-dom';

import s from './index.module.scss';

export const Logo = () => {
  return <Link to="/" className={s.logo} />;
};
