import { useState } from 'react';
import TaskCard from '../../components/Card/TaskCard';
import TaskFilters from '../../components/TaskFilters/TaskFilters';
import StatsBar from '../../components/StatsBar/StatsBar';
import tasks from '../../data/tasks';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All' || task.status === status;
    const matchesPriority = priority === 'All' || task.priority === priority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>{filteredTasks.length} tasks</p>
      </div>

      <StatsBar tasks={tasks} />

      <TaskFilters
        search={search}
        status={status}
        priority={priority}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onPriorityChange={setPriority}
      />

      {filteredTasks.length === 0 ? (
        <p className={styles.empty}>No tasks match your filters.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
}

export default Dashboard;