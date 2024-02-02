import React from 'react';
import { ProfileForm } from '@/sections';
import { profileSelectors } from '@/store/profile';
import { useAppSelector } from '@/store';

export const Profile: React.FC = () => {
  const profile = useAppSelector(profileSelectors.get);
  if (!profile) return 'Loading...';

  const { id: _id, signUpDate: _signUpDate, ...profileFormData } = profile;

  return <ProfileForm data={profileFormData} />;
};
