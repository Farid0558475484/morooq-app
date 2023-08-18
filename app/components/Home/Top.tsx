import styles from "./Top.module.scss";

async function Top() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>
            Welcome, Farid! Take a practice test and get ready for test day.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Top;
