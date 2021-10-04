import clsx from 'clsx';
import React from 'react';
import styles from './TextInput.module.scss';
import { ReactComponent as AlertIcon } from '../../assets/images/Alert.svg';


const TextInput = ({
  className = '',
  label = '',
  value: initValue = '',
  placeholder = '',
  caption = '',
  optional = false,
  infoLabel = '',
  isError = false,
  onClickInfo = () => null,
  onChange = () => null
}) => {
  return (
    <div className={clsx(className, styles.text_input__wrapper)}>
      <label className={clsx(
        styles.text_input__label,
        isError && styles['text_input__label--error']
      )} >
        <span>{label}</span>
        {optional ? <i> (not required)</i> : null}
      </label>

      <input
        className={clsx(
          styles.text_input,
          isError && styles['text_input--error']
        )}
        placeholder={placeholder}
      />

      {optional ? null : (
        <div className={clsx(
          styles.caption,
          !isError && styles['caption--hidden']
        )}>
          <AlertIcon className={styles.caption__icon} />&nbsp;{caption}
        </div>
      )}
    </div>
  );
};

export default TextInput;