import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyCheckoutScene, LazyDetailsScene, LazyHomeScene, LazyNotFoundScene } from '../scenes';
import { ROUTES } from './routes';

export const Router: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.ROOT} element={<LazyHomeScene />} />
        <Route path={ROUTES.HOME} element={<LazyHomeScene />} />
        <Route path={`${ROUTES.DETAILS}/:id`} element={<LazyDetailsScene />} />
        <Route path={ROUTES.CHECKOUT} element={<LazyCheckoutScene />} />
        <Route path="*" element={<LazyNotFoundScene />} />
      </Routes>
    </React.Suspense>
  );
};
