import React, { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {}

// good
const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="EKIA logo" />
    </Link>
  </div>
);

export default Header;
