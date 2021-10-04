import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import {
  Ready,
  UploadIDFront, UploadIDBack,
  VerifyID, VerifyIDResult,
  InfoPersonal
} from './steps';
import styles from './Apply.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const STEPS = {
  READY: 'READY',
  UPLOAD_ID__FRONT: 'UPLOAD_ID__FRONT',
  UPLOAD_ID__BACK: 'UPLOAD_ID__BACK',
  VERIFY_ID: 'VERIFY_ID',
  VERIFY_ID__RESULT: 'VERIFY_ID__RESULT',
  INFO__PERSONAL: 'INFO__PERSONAL',
  INFO__ADDRESS: 'INFO__ADDRESS',
  INFO__ADDITIONAL: 'INFO__ADDITIONAL',
};

const Apply = () => {
  const [step, setStep] = useState(STEPS.READY);
  const [isVerified, setIsVerified] = useState();

  const formikPersonal = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      birthDay: '',
      driverLicense: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      middleName: Yup.string().required('Middle Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      birthDay: Yup.string().required('Date of Birth is required.')
    })
  });

  useEffect(() => setIsVerified(false), []);

  const handleClickBack = () => {
    if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.READY);
    else if (step === STEPS.UPLOAD_ID__BACK) setStep(STEPS.UPLOAD_ID__FRONT);
    else if (step === STEPS.VERIFY_ID) setStep(STEPS.UPLOAD_ID__BACK);
    else if (step === STEPS.VERIFY_ID__RESULT) setStep(STEPS.VERIFY_ID);
    else if (step === STEPS.INFO__PERSONAL) setStep(STEPS.VERIFY_ID__RESULT);
    else if (step === STEPS.INFO__ADDRESS) setStep(STEPS.INFO__PERSONAL);
    else if (step === STEPS.INFO__ADDITIONAL) setStep(STEPS.INFO__ADDRESS);
  };

  const handleClickContinue = e => {
    e.preventDefault();

    if (step === STEPS.READY) setStep(STEPS.UPLOAD_ID__FRONT);
    else if (step === STEPS.UPLOAD_ID__FRONT) setStep(STEPS.UPLOAD_ID__BACK);
    else if (step === STEPS.UPLOAD_ID__BACK) setStep(STEPS.VERIFY_ID);
    else if (step === STEPS.VERIFY_ID) setStep(STEPS.VERIFY_ID__RESULT);
    else if (step === STEPS.VERIFY_ID__RESULT) setStep(STEPS.INFO__PERSONAL);
    else if (step === STEPS.INFO__PERSONAL) {
      formikPersonal.handleSubmit();
      // setStep(STEPS.INFO__ADDRESS);
    }
    else if (step === STEPS.INFO__ADDRESS) setStep(STEPS.INFO__ADDITIONAL);
  };

  const getButtonText = () => {
    if ([STEPS.UPLOAD_ID__FRONT, STEPS.UPLOAD_ID__BACK].includes(step)) return 'Click here to upload';
    else if (step === STEPS.VERIFY_ID) return isVerified ? 'Continue' : '**manual continue button**';

    return 'Continue';
  };

  return (
    <Layout onBack={handleClickBack}>
      <div className={styles.apply}>
        {step === STEPS.READY ? (
          <Ready />
        ) : step === STEPS.UPLOAD_ID__FRONT ? (
          <UploadIDFront />
        ) : step === STEPS.UPLOAD_ID__BACK ? (
          <UploadIDBack />
        ) : step === STEPS.VERIFY_ID ? (
          <VerifyID />
        ) : step === STEPS.VERIFY_ID__RESULT ? (
          <VerifyIDResult />
        ) : step === STEPS.INFO__PERSONAL ? (
          <InfoPersonal formik={formikPersonal} />
        ) : null}

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
            type='submit'
            onClick={handleClickContinue}
            dangerouslySetInnerHTML={{ __html: getButtonText() }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Apply;