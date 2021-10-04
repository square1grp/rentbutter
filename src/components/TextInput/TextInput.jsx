import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './TextInput.module.scss';
import { ReactComponent as AlertIcon } from '../../assets/images/Alert.svg';


const TextInput = ({
  className = '',
  label = '',
  value: initValue = '',
  placeholder = '',
  caption = '',
  optText = '',
  optional = false,
  InfoIcon = React.Fragment,
  infoLabel = '',
  isError = false,
  onClickInfo = () => null,
  onChange = () => null
}) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => setValue(initValue), [initValue]);

  const handleChangeValue = ({ target: { value } }) => {
    setValue(value);
    onChange(value);
  };

  return (
    <div className={clsx(className, styles.text_input__wrapper)}>
      <label className={clsx(
        styles.text_input__label,
        isError && styles['text_input__label--error']
      )} >
        <span>{label}</span>
        {optional && optText ? <i>&nbsp;{optText}</i> : null}
      </label>

      {infoLabel ? (
        <label
          className={clsx(
            styles.text_input__label,
            styles.text_input__info
          )}
          onClick={onClickInfo}
        >
          <InfoIcon className={styles.text_input__info__icon} />
          <span>&nbsp;{infoLabel}</span>
        </label>
      ) : null}

      <input
        className={clsx(
          styles.text_input,
          isError && styles['text_input--error']
        )}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
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