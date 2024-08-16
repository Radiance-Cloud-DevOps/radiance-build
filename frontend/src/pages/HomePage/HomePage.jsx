import React from 'react';
import styles from './homePage.module.css';

const Home = () => {
    const scrollToSection = () => {
        const element = document.getElementById('whoWeAre');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth'});
        }
    };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.textContainer}>
        <h1 style={{color:'white', fontSize:'55px'}}>CLOUD SWIFT</h1>
        <p style={{color:'white', marginTop:'-40px', fontWeight:'400'}}>WE OFFER CUTTING-EDGE IT SOLUTIONS AND CONSULTING SERVICES TO SHAPE YOUR BUSINESS OUTCOME!</p>
        <button className={styles.homeButton} onClick={scrollToSection}>GET STARTED</button>
      </div>
    </div>
  );
}

export default Home;
