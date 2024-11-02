import * as React from 'react';

export const LazyCheckoutScene = React.lazy(() =>
  import('./checkout.scene').then((module) => ({ default: module.CheckoutScene })),
);

export const LazyDetailsScene = React.lazy(() =>
  import('./details.scene').then((module) => ({ default: module.DetailsScene })),
);

export const LazyHomeScene = React.lazy(() => import('./home.scene').then((module) => ({ default: module.HomeScene })));

export const LazyNotFoundScene = React.lazy(() =>
  import('./not-found.scene').then((module) => ({ default: module.NotFoundScene })),
);
