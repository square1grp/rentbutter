import React from 'react';
import styles from './VerifyID.module.scss';
import imgIDHand from '../../../../assets/images/ID-Hand@2x.png';
import { ReactComponent as LoadingSpinnerIcon } from '../../../../assets/images/Loading Spinner.svg';

const VerifyID = () => (
  <div className={styles.verify_id}>
    <img src={imgIDHand} alt="Verifying your ID…" height="70" />

    <div className={styles.verify_id__heading}>Verifying your ID…</div>
    <div className={styles.verify_id__sub_heading}>It may take up to 30-60 seconds so please be patient. Do not refresh or hit the back button.</div>

    <LoadingSpinnerIcon className={styles.loading_spinner} />
  </div>
);

export default VerifyID;