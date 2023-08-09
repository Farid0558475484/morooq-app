"use client";
import styles from "./Home.module.scss";

import { Container, Row } from "react-bootstrap";

function Top() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <p>
                Welcome,Farid! Take a practice test and get ready for test day.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Top;
