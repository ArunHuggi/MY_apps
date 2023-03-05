import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar placeholder="Search a Song of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
