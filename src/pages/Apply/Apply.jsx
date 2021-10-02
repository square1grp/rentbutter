import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Ready, UploadIDFront, UploadIDBack } from './steps';
import styles from './Apply.module.scss';
import { Link } from 'react-router-dom';

const STEPS = {
  READY: 'READY',
  UPLOAD_ID__FRONT: 'UPLOAD_ID__FRONT',
  UPLOAD_ID__BACK: 'UPLOAD_ID__BACK',
};

const Apply = () => {
  const [step, setStep] = useState(STEPS.READY);

  const handleClickBack = () => {
    if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.READY);
    else if (step === STEPS.UPLOAD_ID__BACK) setStep(STEPS.UPLOAD_ID__FRONT);
  };

  const handleClickContinue = e => {
    e.preventDefault();

    if (step === STEPS.READY) setStep(STEPS.UPLOAD_ID__FRONT);
    else if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.UPLOAD_ID__BACK);
  };

  const getButtonText = () => {
    if ([STEPS.UPLOAD_ID__FRONT, STEPS.UPLOAD_ID__BACK].includes(step)) return 'Click here to upload';

    return 'Continue';
  };

  return (
    <Layout onBack={handleClickBack}>
      <div className={styles.apply}>
        <div className={styles.apply__content}>
          {step === STEPS.READY ? (
            <Ready />
          ) : step === STEPS.UPLOAD_ID__FRONT ? (
            <UploadIDFront />
          ) : step === STEPS.UPLOAD_ID__BACK ? (
            <UploadIDBack />
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
            dangerouslySetInnerHTML={{ __html: getButtonText() }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Apply;