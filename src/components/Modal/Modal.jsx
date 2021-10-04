import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';
import { useScrollLock } from '../../hooks';
import clsx from 'clsx';

export const transitionTimeout = 200;

const Modal = ({
  classNames = { container: '', modal: '' },
  show = false,
  children
}) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  useScrollLock(show);

  return (
    <CSSTransition
      nodeRef={containerRef}
      in={show}
      timeout={transitionTimeout}
      classNames={{
        enter: styles['fade--enter'],
        enterActive: styles['fade--enter-active'],
        exit: styles['fade--exit'],
        exitActive: styles['fade--exit-active']
      }}
      unmountOnExit
    >
      <div className={clsx(classNames.container, styles.container)} ref={containerRef}>
        <CSSTransition
          nodeRef={modalRef}
          in={show}
          timeout={transitionTimeout}
          classNames={{
            appear: styles['scale--enter'],
            appearActive: styles['scale--enter-active'],
            exit: styles['scale--exit'],
            exitActive: styles['scale--exit-active'],
          }}
          appear
        >
          <div
            role='dialog'
            aria-modal='true'
            className={clsx(classNames.modal, styles.modal)}
            ref={modalRef}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Modal;