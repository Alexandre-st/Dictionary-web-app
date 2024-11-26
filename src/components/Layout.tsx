import { ReactNode } from 'react';
import { css } from '../../styled-system/css';
import { useTypography } from '../contexts/TypographyContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { typography } = useTypography();

  const typographyStyles = css({
    fontFamily:
      typography === 'serif'
        ? 'serif'
        : typography === 'monospace'
          ? 'Space Mono, monospace;'
          : typography === 'sans-serif'
            ? 'sans-serif'
            : 'sans-serif',
  });

  return <div className={typographyStyles}>{children}</div>;
}
