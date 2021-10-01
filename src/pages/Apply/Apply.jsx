import React from 'react';
import Layout from '../../components/Layout';
import Ready from './steps/Ready';
import styles from './Apply.module.scss';
import { Link } from 'react-router-dom';

const Apply = () => {
  return (
    <Layout>
      <div className={styles.apply}>
        <div className={styles.apply__content}>
          <Ready />
        </div>

        <div className={styles.apply__footer}>
          <div className={styles.apply__pp}>
            By selecting “Continue” you agree to the<br />
            <Link
              to={{ pathname: '/' }}
              dangerouslySetInnerHTML={{ __html: '<b>Rent Butter Privacy Policy.</b>' }}
            />
          </div>

          <button className={styles.button__continue}>Continue</button>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;