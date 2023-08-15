import React from "react";
import Image from "next/image";
import logo from "./../../../public/image/logo1.svg";

import s from "./Footer.module.scss";

async function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerMain}>
        <div className={s.footerLeft}>
          <Image
            className={s.logo}
            src={logo}
            alt="Morooq.com"
            width={120}
            height={120}
          />
          <p>morooq, Inc.</p>
          <p>2035 Sunset Lake Road Suite B-2</p>
          <p>Newark, DE 19702</p>
          <p>2018-2023. All Rights Reserved.</p>
        </div>

        <div className={s.footerLeft}>
          <h6>SUPPORT</h6>
          <p>Frequently Asked Questions</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
