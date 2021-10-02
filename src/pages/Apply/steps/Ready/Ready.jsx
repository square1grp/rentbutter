import React, { useEffect } from 'react';
import styles from './Ready.module.scss';
import { ReactComponent as AlertIcon } from '../../../../assets/images/Alert.svg';
import { ReactComponent as GetStartedIcon } from '../../../../assets/images/Get Started.svg';
import imgIDHand from '../../../../assets/images/ID-Hand@2x.png';
import { ReactComponent as FinancesIcon } from '../../../../assets/images/Finances.svg';
import { ReactComponent as CreditCardIcon } from '../../../../assets/images/Credit Card.svg';

const Ready = () => {
  const checkNetworkSpeed = async () => {
  };

  useEffect(() => {
    checkNetworkSpeed();
  }, []);

  return (
    <div className={styles.ready}>
      <div className={styles.notification}>
        <AlertIcon className={styles.notification__icon} />

        <div className={styles.notification__text}>
          <b>Slow connection detected!</b> Please connect to WiFi before proceeding.
        </div>
      </div>

      <div className={styles.get_started}>
        <GetStartedIcon className={styles.get_started__icon} />

        <div
          className={styles.get_started__heading}
          dangerouslySetInnerHTML={{ __html: '<b>Let’s get started!</b>' }}
        />

        <div
          className={styles.get_started__sub_heading}
          dangerouslySetInnerHTML={{ __html: 'Here’s what you’ll need:' }}
        />
      </div>

      <div className={styles.icon__list}>
        <div className={styles.icon__line}>
          <img
            className={styles.icon}
            src={imgIDHand}
            alt="A valid government issued ID"
            width="40"
          />

          <span className={styles.icon__desc} >
            <b>A valid government issued ID</b>
          </span>
        </div>

        <div className={styles.icon__line}>
          <FinancesIcon className={styles.icon} />

          <span className={styles.icon__desc} >
            <b>Proof of finances/rental history</b>
          </span>
        </div>

        <div className={styles.icon__line}>
          <CreditCardIcon className={styles.icon} />

          <span className={styles.icon__desc} >
            <b>A credit/debit card for app fee</b>
          </span>
        </div>
      </div>
    </div>
  )
};

export default Ready;