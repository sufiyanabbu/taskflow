import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>TaskFlow</div>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>Dashboard</NavLink>
        <NavLink to="/my-tasks" className={styles.navLink}>My Tasks</NavLink>
        <NavLink to="/team" className={styles.navLink}>Team</NavLink>
        <NavLink to="/settings" className={styles.navLink}>Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;