import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppState } from '@/store';
import { tokenSelectors } from '@/store/token';

export const useLoginNavigate = () => {
  const token = useSelector<AppState, AppState['token']>(tokenSelectors.get);
  const location = useLocation();
  const navigate = useNavigate();
  if (token && location.state?.from) setTimeout(() => navigate(location.state?.from));
};
