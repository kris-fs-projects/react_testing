import styles from './Column.module.css';

const Column = ({ heading, children }) => (
  <div className={styles.columnWrapper}>
    <div className={styles.column}>
      <h2 className={styles.columnHeader}>{heading}</h2>
      <div className={styles.columnChildren}>{children}</div>
    </div>
  </div>
);

export default Column;