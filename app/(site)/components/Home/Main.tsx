import React from "react";
import CardItem from "./CardItem";
import styles from "./Main.module.scss";

async function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <CardItem
              title="You Have No Upcoming Test"
              text="You can start a new test by clicking on the button below or clicking on the Start a new test button in the sidebar."
            />
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
