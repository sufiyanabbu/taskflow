import tasks from '../../data/tasks';
import TaskCard from '../../components/Card/TaskCard';
import styles from './MyTasks.module.css';

function MyTasks() {
  const myTasks = tasks.filter((t) => t.assignee === 'Sufiyan');

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Tasks</h1>
        <p className={styles.subtitle}>{myTasks.length} tasks assigned to you</p>
      </div>

      {myTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default MyTasks;