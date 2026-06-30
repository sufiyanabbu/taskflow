import Sidebar from '../Sidebar/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;