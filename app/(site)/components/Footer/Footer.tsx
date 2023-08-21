import Image from "next/image";
import P from "../P/P";
import logo from "./../../../../public/image/logo.svg";
import s from "./Footer.module.scss";

async function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerMain}>
        <div className={s.footerColumn}>
          <Image
            className={s.logo}
            src={logo}
            alt="Morooq.com"
            width={120}
            height={120}
            loading="lazy"
          />
          <P appearance="grey">morooq, Inc.</P>
          <P appearance="grey">2035 Sunset Lake Road Suite B-2</P>
          <P appearance="grey">Newark, DE 19702</P>
          <P appearance="grey">2018-2023. All Rights Reserved.</P>
        </div>

        <div className={s.footerColumn}>
          <h6>SUPPORT</h6>
          <P appearance="grey">Frequently Asked Questions</P>
          <P appearance="grey">Terms and Conditions</P>
          <P appearance="grey">Privacy Policy</P>
          <P appearance="grey">Contact Us</P>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
