import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.scss';
import imgRBLogo from '../../assets/images/RB Logo@2x.png';
import { ReactComponent as BackIcon } from '../../assets/images/Back.svg';
import { ReactComponent as ExitIcon } from '../../assets/images/Exit.svg';

const Header = ({
  onBack = () => null,
  onExit = () => null
}) => {
  const handleClickBack = e => {
    e.preventDefault();

    onBack();
  };

  const handleClickExit = e => {
    e.preventDefault();

    onExit();
  };

  return (
    <div className={styles.header}>
      <button
        className={clsx(styles.button, styles.button__back)}
        onClick={handleClickBack}
      >
        <BackIcon />
      </button>

      <Link
        className={styles.logo}
        to={{ pathname: '/' }}
      >
        <img src={imgRBLogo} alt="RentButter" />
      </Link>

      <button
        className={clsx(styles.button, styles.button__exit)}
        onClick={handleClickExit}
      >
        <ExitIcon />
      </button>
    </div>
  );
};

export default Header;