import React from 'react';
import styles from './footerPage.module.css'; // Import your CSS module file for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© Copyright <strong>Cloudopolis Technologies</strong>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
