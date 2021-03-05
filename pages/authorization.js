import React from 'react';

import styles from '../styles/Authorization.module.scss';

const Authorization = ({ rerouted }) => {
  const [hasAccount, setHasAccount] = React.useState(rerouted ? true : false);

  return (
    <h1>Authorization</h1>
  );
};

export default Authorization;
