import TaskCard from '../../components/Card/TaskCard';
import tasks from '../../data/tasks';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to TaskFlow</p>

      <div style={{ marginTop: '24px' }}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;