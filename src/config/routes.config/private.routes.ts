import React from 'react';

const privateRoutes = [
  {
    path: '/welcome',
    component: React.lazy(() => import('src/modules/welcome')),
  },
  {
    path: '/chat/:id',
    component: React.lazy(() => import('src/modules/chat')),
  },
];

export default privateRoutes;
