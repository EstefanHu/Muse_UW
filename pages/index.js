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

      <section className={`${styles.splashHero} ${styles.splashSection}`}>
        <div className={styles.heroText}>
          <h1>Projekt:Muse</h1>
          <p>Experience the stories all around you</p>
        </div>
      </section>

      <section className={`${styles.splashWhat} ${styles.splashSection}`}>
        <h1>Hello</h1>
      </section>
    </SplashWrapper>
  )
}

export default Index;
