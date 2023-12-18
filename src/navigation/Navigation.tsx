import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Profile, Operations } from '../pages';
import { AuthForm } from '../sections';

export const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="profile" element={<Profile />} />
      <Route path="operations" element={<Operations />} />
    </Routes>
  );
};
