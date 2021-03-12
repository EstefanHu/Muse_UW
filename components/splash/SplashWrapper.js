import React from 'react';
import Link from 'next/link';

import styles from './styles/SplashWrapper.module.scss';

const SplashWrapper = ({ children }) => {
  const [isAuthorizing, setIsAuthorizing] = React.useState(null)

  React.useEffect(() => {
    const modal = document.getElementById('authModalWrapper')
    const closeButton = document.getElementById('authModalCloseButton');

    const closeModal = e => {
      if (e.target === modal || e.target === closeButton) {
        modal.classList.remove(styles.open);
        setTimeout(() => {
          setIsAuthorizing(null)
        }, 500);
      }
    }

    modal.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);

    return () => {
      modal.removeEventListener('click', closeModal);
      closeButton.removeEventListener('click', closeModal);
    }
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
        <span>
          <h1>:Muse</h1>
        </span>

        <span>
          <button
            type="button"
            onClick={() => openModal('register')}
          >
            Register
          </button>

          <button
            type="button"
            onClick={() => openModal('login')}
          >
            Login
          </button>
        </span>
      </nav>

      <section
        id="authModalWrapper"
        className={styles.authModalWrapper}
        style={{ display: `${isAuthorizing !== null ? 'block' : 'none'}` }}
      >
        <div className={styles.authModal}>
          <span>
            <Link href="request">
              <a>Request Access</a>
            </Link>
            <p id="authModalCloseButton">&times;</p>
          </span>
          <h1 className={styles.backgroundText}>:Muse</h1>

          {isAuthorizing === 'register' && <Register toggleView={() => setIsAuthorizing('login')} />}
          {isAuthorizing === 'login' && <Login toggleView={() => setIsAuthorizing('register')} />}
        </div>
      </section>

      <main className={styles.splashContent}>
        {children}
      </main>
    </>
  )
}

const Register = ({ toggleView }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <span>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </span>

      <span>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </span>

      <span>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
      </span>

      <input
        type="submit"
        value="Register"
      />

      <p>Already have an account? <a onClick={toggleView}>Log In.</a></p>
    </form>
  )
}

const Login = ({ toggleView }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <span>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </span>

      <span>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </span>

      <input
        type="submit"
        value="Login"
      />
      <p>Don't have an account? <a onClick={toggleView}>Create One</a></p>
    </form>
  )
}

export default SplashWrapper;
