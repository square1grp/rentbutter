import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Ready, UploadIDFront } from './steps';
import styles from './Apply.module.scss';
import { Link } from 'react-router-dom';

const STEPS = {
  READY: 'READY',
  UPLOAD_ID__FRONT: 'UPLOAD_ID__FRONT'
};

const Apply = () => {
  const [step, setStep] = useState(STEPS.READY);

  const handleClickBack = () => {
    if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.READY);
  };

  const handleClickContinue = e => {
    e.preventDefault();

    if (step === STEPS.READY) setStep(STEPS.UPLOAD_ID__FRONT);
  };

  return (
    <Layout onBack={handleClickBack}>
      <div className={styles.apply}>
        <div className={styles.apply__content}>
          {step === STEPS.READY ? (
            <Ready />
          ) : step === STEPS.UPLOAD_ID__FRONT ? (
            <UploadIDFront />
          ) : null}
        </div>

        <div className={styles.apply__footer}>
          {step === STEPS.READY ? (
            <div className={styles.apply__pp}>
              By selecting “Continue” you agree to the<br />
              <Link
                to={{ pathname: '/' }}
                dangerouslySetInnerHTML={{ __html: '<b>Rent Butter Privacy Policy.</b>' }}
              />
            </div>
          ) : null}

          <button
            className={styles.button__continue}
            onClick={handleClickContinue}
          >Continue</button>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;