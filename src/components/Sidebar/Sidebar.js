import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>TaskFlow</div>

      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Dashboard</a>
        <a href="#" className={styles.navLink}>My Tasks</a>
        <a href="#" className={styles.navLink}>Team</a>
        <a href="#" className={styles.navLink}>Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;