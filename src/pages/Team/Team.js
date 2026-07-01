import styles from './Team.module.css';

const members = [
  { id: 1, name: 'Sufiyan', role: 'Frontend Engineer', tasks: 2 },
  { id: 2, name: 'Ayesha', role: 'UI Designer', tasks: 2 },
  { id: 3, name: 'Rahul', role: 'DevOps Engineer', tasks: 2 },
];

function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Team</h1>
        <p className={styles.subtitle}>{members.length} members</p>
      </div>

      <div className={styles.grid}>
        {members.map((member) => (
          <div key={member.id} className={styles.memberCard}>
            <div className={styles.avatar}>
              {member.name.charAt(0)}
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
            <div className={styles.taskCount}>
              <span>{member.tasks}</span>
              <p>tasks</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
