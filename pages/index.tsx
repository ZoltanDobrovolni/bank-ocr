import type { NextPage } from 'next'
import Head from 'next/head'
import FileUpload from '../components/FileUpload'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bank OCR App</title>
        <meta name="description" content="Parse and analyze files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.title}>
        <h1>
          <span>Upload and analyze OCR account numbers</span>
        </h1>
        </div>
        <div className={styles.main}>
        <FileUpload />
        </div>
      </main>
    </div>
  )
}

export default Home