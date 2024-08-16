import React from "react";
import styles from "./text.module.css";

const Text = ({ text, size, color, tag, icon, iconColor }) => {
  const Tag = tag || "p"; // Default to paragraph tag if no tag is provided

  const textStyles = {
    fontSize: size,
    color: color,
  };

  return (
    <div className={styles.iconAlignmentStyles}>
      {icon && <img src={icon} alt="Icon" className={styles.iconStyles} />}
      <Tag style={textStyles}>{text}</Tag>
    </div>
  );
};

export default Text;
