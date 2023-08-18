import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../public/image/logo.svg";
import user from "./../../../public/image/u2.png";
import styles from "./Header.module.scss";

export async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} height={70} loading="lazy"/>
          </Link>
        </div>
        <div className={styles.headerSignIn}>
          <h2 className={styles.userName}>Hacizade Farid</h2>
          <Image

            src={user}
            alt="Morooq.com"
            width={30}
            height={30}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
