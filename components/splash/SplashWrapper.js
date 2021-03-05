import React from 'react';

import styles from './styles/SplashWrapper.module.scss';

const SplashWrapper = ({ children }) => {
  const [isAuthorizing, setIsAuthorizing] = React.useState(null)

  React.useEffect(() => {
    const modal = document.getElementById('authModalWrapper')

    const closeModal = e => {
      if (e.target === modal) {
        modal.classList.remove(styles.open);
        setTimeout(() => {
          setIsAuthorizing(null)
        }, 500);
      }
    }

    modal.addEventListener('click', closeModal);

    return () => modal.removeEventListener('click', closeModal)
  }, [])

  const openModal = type => {
    setIsAuthorizing(type);
    setTimeout(() => {
      document
        .getElementById('authModalWrapper')
        .classList
        .add(styles.open);
    }, 50);
  }

  return (
    <>
      <nav className={styles.splashHeader}>
        <h1>:Muse_UW</h1>

        <span>
          <button
            type="button"
            onClick={() => openModal('login')}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => openModal('register')}
          >
            Register
          </button>
        </span>
      </nav>

      <section
        id="authModalWrapper"
        className={styles.authModalWrapper}
        style={{ display: `${isAuthorizing !== null ? 'block' : 'none'}` }}
      >
        <div className={styles.authModal}>
          <h1>:Muse</h1>
        </div>
      </section>

      {children}
    </>
  )
}

export default SplashWrapper;
