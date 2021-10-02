import React from 'react';
import styles from './UploadIDBack.module.scss';
import imgIDHand from '../../../../assets/images/ID-Hand@2x.png';
import imgDLBack from '../../../../assets/images/DL Back@2x.png';

const UploadIDBack = () => {
  return (
    <div className={styles.upload_id}>
      <img src={imgIDHand} alt="Upload ID Back" height="70" />

      <div className={styles.upload_id__heading}>Upload your ID</div>
      <div className={styles.upload_id__sub_heading}>Now snap a picture of the <b>back</b> of your ID</div>

      <img src={imgDLBack} alt="Driver License Back" width="240" />

      <div className={styles.upload_id__desc}>
        <b>Tips for taking clear pictures:</b><br />
        Place ID on a solid background, hold phone steady 4-6 inches directly above ID.
      </div>
    </div>
  );
};

export default UploadIDBack;