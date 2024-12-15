import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div style={{ scrollbarWidth: "none" }} className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h2>Add new company</h2>
        <form>
          <div className="input-group">
            <label>Company name</label>
            <input type="text" placeholder="Company name" />
          </div>
          <div className="input-group">
            <label>Company detail</label>
            <input type="text" placeholder="Company detail" />
          </div>
          <div className="input-group">
            <label>Phone number: (Optional)</label>
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="input-group">
            <label>License number</label>
            <input type="text" placeholder="License number" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button className="add-btn">Add New</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
