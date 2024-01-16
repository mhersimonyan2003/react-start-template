import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { tokenActions } from '@/store/token';

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      dispatch(tokenActions.set(storageToken));
    }
  }, [dispatch]);
};
