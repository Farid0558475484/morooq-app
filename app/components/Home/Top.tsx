import styles from "./Top.module.scss";

function Top() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <p>
            Welcome, Farid! Take a practice test and get ready for test day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Top;
