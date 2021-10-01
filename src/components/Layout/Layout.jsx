import React from 'react';
import Modal from '../Modal';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Modal show>
      <Header />

      {children}
    </Modal>
  )
};

export default Layout;