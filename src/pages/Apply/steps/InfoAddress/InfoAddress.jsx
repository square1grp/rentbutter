import React from 'react';
import styles from './InfoAddress.module.scss';
import { ReactComponent as InfoAddressIcon } from '../../../../assets/images/Info Address.svg';
import TextInput from '../../../../components/TextInput';

const InfoAddress = ({ formik }) => (
  <div className={styles.info}>
    <InfoAddressIcon className={styles.info__icon} />

    <div
      className={styles.info__heading}
      dangerouslySetInnerHTML={{ __html: 'Your address information' }}
    />

    <div
      className={styles.info__sub_heading}
      dangerouslySetInnerHTML={{ __html: 'Confirm the following information is accurate' }}
    />

    <form>
      <TextInput
        className={styles.info__input}
        label='Street Address'
        placeholder='Street Address'
        value={formik.values.address}
        onChange={value => formik.setFieldValue('address', value)}
        isError={formik.touched.address && formik.errors.address}
        caption={formik.errors.address}
      />

      <TextInput
        className={styles.info__input}
        label='Optional Address2'
        placeholder='Apt., Suite #'
        optional
        value={formik.values.address2}
        onChange={value => formik.setFieldValue('address2', value)}
      />

      <TextInput
        className={styles.info__input}
        label='State'
        placeholder='State'
        value={formik.values.state}
        onChange={value => formik.setFieldValue('state', value)}
        isError={formik.touched.state && formik.errors.state}
        caption={formik.errors.state}
      />

      <TextInput
        className={styles.info__input}
        label='City'
        placeholder='City or Town'
        value={formik.values.city}
        onChange={value => formik.setFieldValue('city', value)}
        isError={formik.touched.city && formik.errors.city}
        caption={formik.errors.city}
      />

      <TextInput
        className={styles.info__input}
        label="Zip Code"
        placeholder="XXXXX"
        value={formik.values.zipCode}
        onChange={value => formik.setFieldValue('zipCode', value)}
        isError={formik.touched.zipCode && formik.errors.zipCode}
        caption={formik.errors.zipCode}
      />

    </form>
  </div>
);

export default InfoAddress;