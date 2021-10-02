import React from 'react';
import styles from './UploadIDFront.module.scss';
import imgIDHand from '../../../../assets/images/ID-Hand@2x.png';
import imgDLFront from '../../../../assets/images/DL Front@2x.png';

const UploadIDFront = () => (
  <div className={styles.upload_id}>
    <img src={imgIDHand} alt="Upload ID Front" height="70" />

    <div className={styles.upload_id__heading}>Upload your ID</div>
    <div className={styles.upload_id__sub_heading}>Snap a picture of the <b>front</b> of your ID</div>

    <img src={imgDLFront} alt="Driver License Front" width="240" />

    <div className={styles.upload_id__desc}>
      <b>Tips for taking clear pictures:</b><br />
      Place ID on a solid background, hold phone steady 4-6 inches directly above ID.
    </div>
  </div>
);

export default UploadIDFront;