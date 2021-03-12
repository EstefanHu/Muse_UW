import React from 'react'
import Head from 'next/head'

import SplashWrapper from '../components/splash/SplashWrapper';

import styles from '../styles/Index.module.scss';

const Index = () => {
  return (
    <SplashWrapper>
      <Head>
        <title>:Muse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`${styles.splashHero} ${styles.splashSection}`}>
        <div className={styles.heroText}>
          <div>
            <span className={styles.strip}>
              <h2>PRJKT:</h2>
            </span>

            <span>
              <h1>Muse</h1>
            </span>
          </div>
          <p>Experience the stories around you</p>
        </div>
      </section>

      <section className={`${styles.splashWhat} ${styles.splashSection}`}>
        <h1>Hello</h1>
      </section>
    </SplashWrapper>
  )
}

export default Index;
