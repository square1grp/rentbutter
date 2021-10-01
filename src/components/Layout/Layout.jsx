import React, { useState } from 'react';
import Modal from '../Modal';
import Header from '../Header';

const Layout = ({ children, onBack = () => null, onExit = () => null }) => {
  const [show, setShow] = useState(true);

  const handleClickExit = () => {
    setShow(false);

    onExit();
  };

  return (
    <Modal show={show}>
      <Header onBack={onBack} onExit={handleClickExit} />

      {children}
    </Modal>
  )
};

export default Layout;