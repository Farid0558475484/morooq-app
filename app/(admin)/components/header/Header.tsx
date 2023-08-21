import React from "react";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../../../public/image/logo.svg";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <Container fluid>
        <Row>
          <div className="col-md-12">
            <div className={s.header_main}>
              <div className="header_logo">
                <Link href="/dashboard">
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </Link>
              </div>
              <div className={s.header_title}>
                <p>Hacizade Farid</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
