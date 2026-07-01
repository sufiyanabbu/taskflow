import styles from './TaskFilters.module.css';

function TaskFilters({ search, status, priority, onSearchChange, onStatusChange, onPriorityChange }) {
  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className={styles.select}
      >
        <option value="All">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className={styles.select}
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default TaskFilters;