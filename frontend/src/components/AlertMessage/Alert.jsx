import React from 'react';
import styles from './alert.module.css';

const Alert = ({ message, type }) => {
  if (!message) return null;

  const alertStyles = type === 'success' ? styles.success : styles.error;

  return (
    <div className={`${styles.alert} ${alertStyles}`}>
      {message}
    </div>
  );
};

export default Alert;
