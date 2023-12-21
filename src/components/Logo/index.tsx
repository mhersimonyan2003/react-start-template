import React from 'react';
import { Link } from 'react-router-dom';

import s from './index.module.scss';

const Logo = () => {
  return <Link to="/" className={s.logo} />;
};

export default Logo;
