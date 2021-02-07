import styles from '../styles/Layout.module.css';

export default layout = ({children}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}