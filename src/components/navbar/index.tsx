import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export default function Navbar() {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : styles.link;

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getClassName}>
        首页
      </NavLink>
      <NavLink to="/images" className={getClassName}>
        图文
      </NavLink>
      <NavLink to="/videos" className={getClassName}>
        视频
      </NavLink>
    </nav>
  );
}
