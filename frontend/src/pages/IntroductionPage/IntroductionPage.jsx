import React from 'react';
import styles from './introduction.module.css'; 

const IntroductionPage = () => {
  const scrollToSection = () => {
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="whoWeAre" className={styles.section1}>
        <h1 className={styles.section1Title}>WHO WE ARE</h1>
        <p className={styles.section1Text}>
          We are a leading Information Technology and Services company 
          based in Canada with offices in both India and North America. 
          We offer cutting-edge IT solutions and consulting services 
          to shape your business outcome.
        </p>
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.section2}></div>
        <div className={styles.textContainer}>
          <h4 style={{fontSize:"1.7rem",color:"white"}}>Thinking of moving your business to Cloud!</h4>
          <p style={{color:'white', fontSize:'16px', marginTop: '-30px'}}>Older technologies cost more | Skills and resource gaps | Thorough Strategy and Business Objectives | Time, Cost and Security</p>
          <p style={{color:"white", fontSize:'16px', marginTop:'0px', letterSpacing:'-0.5px'}}>The above factors are stopping you from moving to Cloud Services. Cloud Groove team will help you in the right way possible to shape your business outcome.</p>
          <button className={styles.homeButton} onClick={scrollToSection}>CONTACT US</button>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
