import React from 'react';
import styles from './VerifyIDResult.module.scss';
import imgIDHand from '../../../../assets/images/ID-Hand@2x.png';
import { ReactComponent as CheckIcon } from '../../../../assets/images/Check.svg';
import { ReactComponent as WarningIcon } from '../../../../assets/images/Warning.svg';

const VerifyIDResult = ({ success = false }) => (
  <div className={styles.result}>
    <div className={styles.result__image__wrapper}>
      <img src={imgIDHand} alt="Result" height="70" />

      {success ? <CheckIcon className={styles.result__image} /> : <WarningIcon className={styles.result__image} />}
    </div>

    <div
      className={styles.result__heading}
      dangerouslySetInnerHTML={{ __html: success ? 'Congratulations!' : 'Uh Oh!' }}
    />

    <div className={styles.result__sub_heading}>
      {success ? (
        <>Your identity has been <b>verified</b>.</>
      ) : (
        <><b>We weren’t able to verify your ID.</b><br />You may be asked to provide it later.</>
      )}
    </div>
  </div >
);

export default VerifyIDResult;