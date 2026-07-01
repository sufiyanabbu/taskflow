import styles from './StatsBar.module.css';

function StatsBar({ tasks }) {
  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === 'To Do').length;
  const inProgress = tasks.filter((t) => t.status === 'In Progress').length;
  const done = tasks.filter((t) => t.status === 'Done').length;

  return (
    <div className={styles.statsBar}>
      <div className={styles.stat}>
        <span className={styles.value}>{total}</span>
        <span className={styles.label}>Total</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.value}>{todo}</span>
        <span className={styles.label}>To Do</span>
      </div>
      <div className={styles.stat}>
        <span className={`${styles.value} ${styles.inProgress}`}>{inProgress}</span>
        <span className={styles.label}>In Progress</span>
      </div>
      <div className={styles.stat}>
        <span className={`${styles.value} ${styles.done}`}>{done}</span>
        <span className={styles.label}>Done</span>
      </div>
    </div>
  );
}

export default StatsBar;