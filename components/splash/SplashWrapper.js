import React from 'react';

import styles from './styles/SplashWrapper.module.scss';

const SplashWrapper = ({ children }) => {
  const [isAuthorizing, setIsAuthorizing] = React.useState(false);

  return (
    <>
      <nav className={styles.splashHeader}>
        <h1>:Muse_UW</h1>

        <span>
          <button
            type="button"
            onClick={() => setIsAuthorizing(true)}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setIsAuthorizing(true)}
          >
            Register
          </button>
        </span>
      </nav>

      <section
        id={styles.authModalWrapper}
        className={`${isAuthorizing && 'open'}`}
        onClick={() => setIsAuthorizing(false)}
      >
        <div id={styles.authModal} >
          <h1>Hello World</h1>
        </div>
      </section>

      {children}
    </>
  )
}



export default SplashWrapper;
