const modalFunctionality = (onClose) => {
    // функция для закрытия окна и удаления обработчика
    const closeModal = () => {
      onClose();
      removeEventESC();
    };
  
    // функция для удаления обработчика события при нажатии на клавишу ESC
    const removeEventESC = () => {
      document.removeEventListener('keydown', eventESC, false);
    };
  
    // функция для добавления обработчика события при нажатии на клавишу ESC
    const addEventESC = () => {
      document.addEventListener('keydown', eventESC, false);
    };
  
    // функция для обработки события нажатия на клавишу ESC
    const eventESC = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
  
    return { closeModal, addEventESC, removeEventESC };
  };
  
  export default modalFunctionality;