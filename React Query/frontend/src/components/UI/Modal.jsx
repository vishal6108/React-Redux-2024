import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  console.log("any update on modal");
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    // return () => {
    //   modal.close(); // needed to avoid error being thrown
    // };
  }, []);
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      <>{children}</>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
