import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(!showModal);

  const renderModalActionBar = () => {
    return (
      <div>
        <Button primary onClick={handleClick}>
          I accept
        </Button>
      </div>
    );
  };

  const renderModal = () => {
    if (!showModal) return;

    return (
      <Modal onClose={handleClick} actionBar={renderModalActionBar()}>
        <p>Hello World Children</p>
      </Modal>
    );
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {renderModal()}
    </div>
  );
};

export default ModalPage;
