import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { ReactComponent as AlertIcon } from '../../assets/images/Alert.svg';
import { ReactComponent as CaretDownIcon } from '../../assets/images/CaretDown.svg';

const Select = ({
  className = '',
  label = '',
  value: initValue = '',
  options: initOptions = [],
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
  const [isOpened, setIsOpened] = useState(false);
  const [option, setOption] = useState({ value: '', label: placeholder });
  const [options, setOptions] = useState(initOptions);

  useEffect(() => {
    const option = options.filter(option => initValue === option.value)[0];

    setOption(option || { value: '', label: placeholder });
    // eslint-disable-next-line
  }, [initValue]);

  useEffect(() => {
    setOptions([].concat(
      optional ? [{ value: '', label: placeholder }] : [],
      initOptions
    ))
    // eslint-disable-next-line
  }, [initOptions]);

  const handleChangeValue = value => {
    if (!isOpened) return;

    const option = options.filter(option => option.value === value)[0];
    setOption(option);
    onChange(option.value);

    setIsOpened(false);
  };

  return (
    <div className={clsx(className, styles.select__wrapper)}>
      <label className={clsx(
        styles.select__label,
        isError && styles['select__label--error']
      )} >
        <span>{label}</span>
        {optional && optText ? <i>&nbsp;{optText}</i> : null}
      </label>

      {infoLabel ? (
        <label
          className={clsx(
            styles.select__label,
            styles.select__info
          )}
          onClick={onClickInfo}
        >
          <InfoIcon className={styles.select__info__icon} />
          <span>&nbsp;{infoLabel}</span>
        </label>
      ) : null}

      <div
        className={clsx(
          styles.select,
          option.value === '' && styles['select--placeholder'],
          isError && styles['select--error']
        )}
        onClick={() => setIsOpened(!isOpened)}
      >
        {option.label}
        <CaretDownIcon className={clsx(
          styles.select__dropdown__icon,
          isOpened && styles['select__dropdown__icon--opened']
        )} />
      </div>

      <div className={clsx(
        styles.select__dropdown,
        isOpened && styles['select__dropdown--opened']
      )}>
        {options.map(({ value, label }, oIndex) => <div
          key={oIndex}
          className={clsx(
            styles.select__dropdown__item,
            value === option.value && styles['select__dropdown__item--selected']
          )}
          dangerouslySetInnerHTML={{ __html: label }}
          onClick={() => handleChangeValue(value)}
        />
        )}
      </div>

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

export default Select;