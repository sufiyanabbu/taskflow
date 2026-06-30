import Card from './Card';
import styles from './TaskCard.module.css';

function TaskCard({ task }) {
  return (
    <Card className={styles.taskCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <span className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}>
          {task.priority}
        </span>
      </div>

      <div className={styles.meta}>
        <span className={styles.status}>{task.status}</span>
        <span className={styles.assignee}>{task.assignee}</span>
        <span className={styles.dueDate}>Due {task.dueDate}</span>
      </div>
    </Card>
  );
}

export default TaskCard;