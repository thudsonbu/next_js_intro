import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export default layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
