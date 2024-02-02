import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelectors } from '@/store/token';
import { AppState } from '@/store';
import { NavigationState } from './types';

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useSelector<AppState, AppState['token']>(tokenSelectors.get);
  const location = useLocation();
  if (token) return <>{children}</>;
  return <Navigate to="/" state={{ from: location } as NavigationState} replace />;
};
