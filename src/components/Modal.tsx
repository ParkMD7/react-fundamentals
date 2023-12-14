import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: any;
  actionBar: any;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ children, actionBar, onClose }: ModalProps) => {
  // when modal if first shown on the screen add a prevent scroll to the document body
  // remove it when the modal unmounts
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const modalContainer = document.querySelector(".modal-container");

  if (!modalContainer) return null;

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
