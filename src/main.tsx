import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { TypographyProvider } from './contexts/TypographyContext';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider>
      <TypographyProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </TypographyProvider>
    </ThemeProvider>
  );
}
