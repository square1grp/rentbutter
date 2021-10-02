import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Ready, UploadIDFront, UploadIDBack, VerifyID } from './steps';
import styles from './Apply.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const STEPS = {
  READY: 'READY',
  UPLOAD_ID__FRONT: 'UPLOAD_ID__FRONT',
  UPLOAD_ID__BACK: 'UPLOAD_ID__BACK',
  VERIFY_ID: 'VERIFY_ID'
};

const Apply = () => {
  const [step, setStep] = useState(STEPS.UPLOAD_ID__BACK);
  const [isVerified, setIsVerified] = useState(false);

  const handleClickBack = () => {
    if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.READY);
    else if (step === STEPS.UPLOAD_ID__BACK) setStep(STEPS.UPLOAD_ID__FRONT);
    else if (step === STEPS.VERIFY_ID) setStep(STEPS.UPLOAD_ID__BACK);
  };

  const handleClickContinue = e => {
    e.preventDefault();

    if (step === STEPS.READY) setStep(STEPS.UPLOAD_ID__FRONT);
    else if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.UPLOAD_ID__BACK);
    else if (step === STEPS.UPLOAD_ID__BACK) setStep(STEPS.VERIFY_ID);
  };

  const getButtonText = () => {
    if ([STEPS.UPLOAD_ID__FRONT, STEPS.UPLOAD_ID__BACK].includes(step)) return 'Click here to upload';
    else if (step === STEPS.VERIFY_ID) return isVerified ? 'Continue' : '**manual continue button**';

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
          ) : step === STEPS.VERIFY_ID ? (
            <VerifyID />
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
            className={clsx(
              styles.button__continue,
              step === STEPS.VERIFY_ID && !isVerified && styles['button__continue--disabled']
            )}
            onClick={handleClickContinue}
            dangerouslySetInnerHTML={{ __html: getButtonText() }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Apply;