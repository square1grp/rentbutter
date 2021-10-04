import React from 'react';
import styles from './InfoPersonal.module.scss';
import { ReactComponent as InfoPersonalIcon } from '../../../../assets/images/Info Personal.svg';
import TextInput from '../../../../components/TextInput';

const InfoPersonal = ({ formik }) => (
  <div className={styles.info}>
    <InfoPersonalIcon className={styles.info__icon} />

    <div
      className={styles.info__heading}
      dangerouslySetInnerHTML={{ __html: 'Your personal information' }}
    />

    <div
      className={styles.info__sub_heading}
      dangerouslySetInnerHTML={{ __html: 'Confirm the following information is accurate' }}
    />

    <form>
      <TextInput
        className={styles.info__input}
        label='First Name'
        placeholder='First Name'
        value={formik.values.firstName}
        onChange={value => formik.setFieldValue('firstName', value)}
        isError={formik.touched.firstName && formik.errors.firstName}
        caption={formik.errors.firstName}
      />

      <TextInput
        className={styles.info__input}
        label='Middle Name'
        placeholder='Middle Name'
        value={formik.values.middleName}
        onChange={value => formik.setFieldValue('middleName', value)}
        isError={formik.touched.middleName && formik.errors.middleName}
        caption={formik.errors.middleName}
      />

      <TextInput
        className={styles.info__input}
        label='Last Name'
        placeholder='Last Name'
        value={formik.values.lastName}
        onChange={value => formik.setFieldValue('lastName', value)}
        isError={formik.touched.lastName && formik.errors.lastName}
        caption={formik.errors.lastName}
      />

      <TextInput
        className={styles.info__input}
        label='Date of Birth'
        placeholder='MM/DD/YYYY'
        value={formik.values.birthDay}
        onChange={value => formik.setFieldValue('birthDay', value)}
        isError={formik.touched.birthDay && formik.errors.birthDay}
        caption={formik.errors.birthDay}
      />

      <TextInput
        className={styles.info__input}
        label="Driver's License / ID#"
        placeholder="Driver's License / ID#"
        value={formik.values.driverLicense}
        onChange={value => formik.setFieldValue('driverLicense', value)}
        isError={formik.touched.driverLicense && formik.errors.driverLicense}
        caption={formik.errors.driverLicense}
        optional
        optText='(not required)'
      />

    </form>
  </div>
);

export default InfoPersonal;