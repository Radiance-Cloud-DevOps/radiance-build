import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './navigation.module.css'; // Import your CSS module for styling
import menu from '../../assets/list.svg';
import Button from '../../components/Button/Button';
//import Logo from "../../assets/radianceLogo.png";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = () => {
        const element = document.getElementById('whoWeAre');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.navbarInnerContainer}>
                {/* <img className={styles.logo} src={Logo}/> */}
                <h2 className={styles.logo}>CLOUD SWIFT</h2>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <img src={menu} alt="menuBar"/>   
                </button>
                <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                    <Link
                        to="home"
                        spy={true}
                        activeClass="active"   
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleMenu}
                    >
                        HOME
                    </Link>
                    <Link
                        to="news"
                        spy={true}
                        activeClass="active"   
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleMenu}
                    >
                        WHO WE ARE
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        activeClass="active"   
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleMenu}
                    >
                        WHAT WE OFFER
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        activeClass="active"   
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleMenu}
                    >
                        CONTACT
                    </Link>
                    <Button onClick={scrollToSection}>
                        GET STARTED
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
