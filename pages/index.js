import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom's Home Page</title>
        <meta name='keywords' content='webdevelopment programming' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
