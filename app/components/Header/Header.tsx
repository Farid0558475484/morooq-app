import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/image/logo.svg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={70} />
          </Link>
        </div>
        <div className={styles.headerSignIn}>
          <h2 className={styles.userName}>Hacizade Farid</h2>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
