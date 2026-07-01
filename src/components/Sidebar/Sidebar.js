import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>TaskFlow</div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/my-tasks"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          My Tasks
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Team
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;