import React from 'react';

const publicRoutes = [
  {
    path: '/sign-in',
    component: React.lazy(() => import('src/modules/auth')),
  },
];

export default publicRoutes;
