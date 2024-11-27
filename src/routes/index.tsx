import { createFileRoute } from '@tanstack/react-router';
import { css } from '../../styled-system/css';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <div className={css({ fontSize: "4xl", bg: '#fff', _osDark: { bg: '#050505' }, color: 'text', fontWeight: 'bold', backgroundColor: 'red.300' })}>Hello 🐼!</div>
    </div>
  );
}
