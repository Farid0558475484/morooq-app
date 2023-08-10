import React from "react";
import Link from "next/link";

import CardItem from "./CardItem";

import styles from "./Bottom.module.scss";

async function Bottom() {
  return (
    <div className={styles.practice}>
      <div className="container-fluid pt-5 pb-5">
        <div className="row pt-5 justify-content-center">
          <div className="col-md-3">
            <CardItem
              title="Card Title"
              text="Some quick example text to build on the card title and make up the bulk of the cards content."
            />
          </div>
          <div className="col-md-3">
            <CardItem
              title="Card Title"
              text="Some quick example text to build on the card title and make up the bulk of the cards content."
            />
          </div>
          <div className="col-md-3">
            <CardItem
              title="Card Title"
              text="Some quick example text to build on the card title and make up the bulk of the cards content."
            />
          </div>
          <div className="col-md-3">
            <CardItem
              title="Card Title"
              text="Some quick example text to build on the card title and make up the bulk of the cards content."
            />
          </div>
        </div>

        <div className="row pt-5">
          <div className={styles.satTestBtn}>
            <Link href="/sat-test">
              <button>Next Sat-test</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
