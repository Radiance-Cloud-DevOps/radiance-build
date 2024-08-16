import React from 'react';
import styles from './card.module.css'; // Import the CSS file for styling

const Card = ({ text, text2, icon, textColor, cardColor, textSize, text2Size, cardHeight }) => {
    const cardStyle = {
        backgroundColor: cardColor,
        color: textColor,
        fontSize: textSize,
        height: cardHeight,
    };

    const textStyle = {
        fontSize: text2Size,
    };

    return (
        <div className={styles.card} style={cardStyle}>
            {icon && <img src={icon} alt="Icon" className={styles.cardIcon} />}
            <div className={styles.cardTextContainer}>
                <h4>{text}</h4>
                <p style={textStyle}>{text2}</p>
            </div>
        </div>
    );
}

export default Card;
