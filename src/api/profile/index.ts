import type { AxiosResponse } from 'axios';
import { apiAuth } from '../api';
import { Profile } from '@/types';
import { UpdateProfileBody } from './types';

export const getProfile = async (): Promise<Profile> => {
  try {
    const response: AxiosResponse<Profile> = await apiAuth.get('/profile/');

    return response.data;
  } catch (error) {
    console.error('Error getting profile:', error);
    throw error;
  }
};

export const updateProfile = async (profileBody: UpdateProfileBody): Promise<Profile> => {
  try {
    const response: AxiosResponse<Profile> = await apiAuth.patch('/profile/', profileBody);

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
