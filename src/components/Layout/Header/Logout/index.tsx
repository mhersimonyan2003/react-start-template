import React from 'react';
import { useDispatch } from 'react-redux';
import { LogoutIcon } from '@/icons';
import { tokenActions } from '@/store/token';

import s from './index.module.scss';

export const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(tokenActions.clear());
  };

  return (
    <div className={s.logout} onClick={logoutHandler}>
      <LogoutIcon />
    </div>
  );
};
