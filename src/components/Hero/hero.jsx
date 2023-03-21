import React from "react";
import styles from "./hero.module.css";
import HeadphoneImg from "../assets/vibrating-headphone.png";

function hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over Thousand Podcast Episodes</h2>
      </div>
      <img src={HeadphoneImg} alt="music" width={212} height={212} />
    </div>
  );
}

export default hero;
