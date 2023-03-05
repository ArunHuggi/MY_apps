import React from "react";
import styles from "./Button.module.css";
// import FeedBackImg from "../assets/feedback.png";

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
