import React from 'react';
import styles from './button.module.css'; // Import your CSS module for styling

const Button = ({ onClick, children }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
