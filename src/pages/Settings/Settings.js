import { useState } from 'react';
import styles from './Settings.module.css';

function Settings() {
  const [name, setName] = useState('Sufiyan');
  const [email, setEmail] = useState('sufiyan@taskflow.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Manage your profile and preferences</p>
      </div>

      {/* Profile Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Profile</h2>

        <div className={styles.field}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
      </section>

      {/* Preferences Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Preferences</h2>

        <div className={styles.toggle}>
          <div>
            <p className={styles.toggleLabel}>Email Notifications</p>
            <p className={styles.toggleDesc}>Receive updates about your tasks</p>
          </div>
          <button
            className={`${styles.toggleBtn} ${notifications ? styles.toggleOn : ''}`}
            onClick={() => setNotifications(!notifications)}
          >
            <span className={styles.toggleThumb} />
          </button>
        </div>

        <div className={styles.toggle}>
          <div>
            <p className={styles.toggleLabel}>Dark Mode</p>
            <p className={styles.toggleDesc}>Use dark theme across the app</p>
          </div>
          <button
            className={`${styles.toggleBtn} ${darkMode ? styles.toggleOn : ''}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span className={styles.toggleThumb} />
          </button>
        </div>
      </section>

      {/* Save Button */}
      <div className={styles.actions}>
        <button
          className={`${styles.saveBtn} ${saved ? styles.savedBtn : ''}`}
          onClick={handleSave}
        >
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

export default Settings;