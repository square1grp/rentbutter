import React, { useState } from 'react';
import styles from './InfoAdditional.module.scss';
import { ReactComponent as QuestionIcon } from '../../../../assets/images/QuestionCircle.svg';
import { ReactComponent as InfoAdditionalIcon } from '../../../../assets/images/Info Additional.svg';
import TextInput from '../../../../components/TextInput';
import Modal from '../../../../components/Modal';

const InfoAdditional = ({ formik }) => {
  const [showWhy, setShowWhy] = useState(false);

  return (
    <div className={styles.info}>
      <InfoAdditionalIcon className={styles.info__icon} />

      <div
        className={styles.info__heading}
        dangerouslySetInnerHTML={{ __html: 'Additional information' }}
      />

      <div
        className={styles.info__sub_heading}
        dangerouslySetInnerHTML={{ __html: 'Please verify and complete your information below' }}
      />

      <form>
        <TextInput
          className={styles.info__input}
          label='Email Address'
          placeholder='Email Address'
          value={formik.values.email}
          onChange={value => formik.setFieldValue('email', value)}
          isError={formik.touched.email && formik.errors.email}
          caption={formik.errors.email}
        />

        <TextInput
          className={styles.info__input}
          label='Mobile Phone'
          placeholder='(XXX) XXX-XXXX'
          value={formik.values.phone}
          onChange={value => formik.setFieldValue('phone', value)}
          isError={formik.touched.phone && formik.errors.phone}
          caption={formik.errors.phone}
        />

        <TextInput
          className={styles.info__input}
          label='SSN / ITIN'
          placeholder='XXX-XX-XXXX'
          value={formik.values.identity}
          onChange={value => formik.setFieldValue('identity', value)}
          isError={formik.touched.identity && formik.errors.identity}
          caption={formik.errors.identity}
          InfoIcon={QuestionIcon}
          infoLabel='Why?'
          onClickInfo={() => setShowWhy(true)}
        />
      </form>

      <Modal
        classNames={{
          container: styles.why__container,
          modal: styles.why__modal
        }}
        show={showWhy}
      >
        <div
          className={styles.why__heading}
          dangerouslySetInnerHTML={{ __html: 'Why SSN or ITIN numbers?' }}
        />

        <div className={styles.why__sub_heading}>
          Descriptive info here. Lorem ipsum dolor sit
          amet, cum error propriae id. Te prompta percipit
          pertinax has, noster graecis delectus quo ex.
          Vel et explicari euripidis referrentur, pri
          consulatu posidonium ei. Iusto temporibus
          complectitur eam te, graeco perfecto
          neglegentur eos ei, dicat sententiae ex vim.
        </div>

        <button
          className={styles.why__button}
          onClick={() => setShowWhy(false)}
          dangerouslySetInnerHTML={{ __html: 'Continue' }}
        />
      </Modal>
    </div>
  );
};

export default InfoAdditional;