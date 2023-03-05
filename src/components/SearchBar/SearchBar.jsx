import React from "react";
import styles from "./Search.module.css";
// import SearchIcon from "../assets/SearchIcon";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";

function SearchBar({ placeholder }) {
  //   return <img src={serachbar} alt="search bar" height={48} width={568} />;
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} type="text" placeholder={placeholder} />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
