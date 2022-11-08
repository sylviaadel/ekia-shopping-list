import React, { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <img className={styles.logo} src={logo} alt="EKIA logo" />
  </div>
);

export default Header;
