import styles from './Button.module.css';

function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;