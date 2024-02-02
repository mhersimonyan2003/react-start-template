import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth, Profile, Operations } from '@/pages';
import { ProtectedRoute } from './ProtectedRoute';
import { useLoginNavigate } from './useLoginNavigate';

export const Navigation: React.FC = () => {
  useLoginNavigate();

  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="operations" element={<Operations />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};
