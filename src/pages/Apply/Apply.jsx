import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import {
  Ready,
  UploadIDFront, UploadIDBack,
  VerifyID, VerifyIDResult,
  InfoPersonal, InfoAddress, InfoAdditional
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
      firstName: Yup.string().required('First Name is required.'),
      middleName: Yup.string().required('Middle Name is required.'),
      lastName: Yup.string().required('Last Name is required.'),
      birthDay: Yup.string().required('Date of Birth is required.')
    }),
    onSubmit: () => {
      return true;
    }
  });

  const formikAddress = useFormik({
    initialValues: {
      address: '',
      address2: '',
      state: '',
      city: '',
      zipCode: ''
    },
    validationSchema: Yup.object({
      address: Yup.string().required('Street Address is required.'),
      state: Yup.string().required('State is required.'),
      city: Yup.string().required('City is required.'),
      zipCode: Yup.string().required('Zip Code is required.')
        .matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Please input a valid code.')
    }),
    onSubmit: () => {
      return true;
    }
  });

  const formikAdditional = useFormik({
    initialValues: {
      email: '',
      phone: '',
      identity: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email Address is required.')
        .email('Please input a valid email.'),
      phone: Yup.string().required('Mobile Phone is required.')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/),
      identity: Yup.string().required('SSN / ITN is required.')
    }),
    onSubmit: () => {
      return true;
    }
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
      if (formikPersonal.handleSubmit()) setStep(STEPS.INFO__ADDRESS);
    } else if (step === STEPS.INFO__ADDRESS) {
      if (formikAddress.handleSubmit()) setStep(STEPS.INFO__ADDITIONAL);

    } else if (step === STEPS.INFO__ADDITIONAL) formikAdditional.handleSubmit();
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
        ) : step === STEPS.INFO__ADDRESS ? (
          <InfoAddress formik={formikAddress} />
        ) : step === STEPS.INFO__ADDITIONAL ? (
          <InfoAdditional formik={formikAdditional} />
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