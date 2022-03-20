import React, { useEffect, useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const [modalNumber, setModalNumber] = useState(0);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function chooseModal(id) {
    setModalNumber(id);
    toggle();
  }

  return {
    isShowing,
    toggle,
    modalNumber,
    chooseModal,
  };
};

export default useModal;
