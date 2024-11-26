import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../layouts/Header';
// import * as React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Link
        to='/'
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{' '}
      <Link
        to='/about'
        activeProps={{
          className: 'font-bold',
        }}
      >
        About
      </Link>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  );
}
