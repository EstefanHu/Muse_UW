import Head from 'next/head'

import SplashWrapper from '../components/splash/SplashWrapper';

import styles from '../styles/Index.module.scss';

const Index = () => {
  return (
    <SplashWrapper>
      <Head>
        <title>:Muse_UW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.splashMain}>
        <h1>Index</h1>
      </main>
    </SplashWrapper>
  )
}

export default Index;
