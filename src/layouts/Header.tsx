import { css } from '../../styled-system/css';
import { container } from '../../styled-system/patterns';
import ThemeToggle from '../components/ThemeToggle';
import { useTypography } from '../contexts/TypographyContext';

export function Header() {
  const { typography, setTypography } = useTypography();

  return (
    <header
      // className={css({
      //   bg: 'background',
      //   color: 'white',
      //   padding: 2,
      //   fontSize: 'xl',
      //   fontWeight: 'bold',
      // })}
      className={css({
        padding: '16px',
        backgroundColor: 'background',
        color: 'text',
      })}
    >
      <div
        className={container({
          display: 'flex',
          justifyContent: 'space-between',
          color: 'text',
        })}
      >
        Logo
        <div className={css({display: 'flex', gap: '2'})}>
          <select className={css({})} value={typography} onChange={(evt) => setTypography(evt.target.value)}>
            <option value='sans-serif'>Sans Serif</option>
            <option value='serif'>Serif</option>
            <option value='monospace'>Mono</option>
          </select>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
