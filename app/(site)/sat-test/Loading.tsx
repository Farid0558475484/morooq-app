import React, { Suspense } from "react";

import SatText from "./page";

import styles from "./Loading.module.scss";

async function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p className={styles.loadingText}>Loading...</p>
      <p className={styles.loadingDescription}>
        Please wait while the content is loading
      </p>
    </div>
  );
}

async function LoadingSatText() {
  return (
    <Suspense fallback={<Loading />}>
      <SatText />
    </Suspense>
  );
}
export default LoadingSatText;
