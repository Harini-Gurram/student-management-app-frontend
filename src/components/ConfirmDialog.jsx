import React from "react";
import "./ConfirmDialog.css";
import { toast } from "react-toastify";

const ConfirmDialog = ({ show, onConfirm, onCancel, studentName }) => {
  if (!show) return null;

  const handleConfirm = async () => {
    try {
      await onConfirm();
    } catch (error) {}
  };

  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog-container">
        <h3>Are you sure you want to delete "{studentName}" details?</h3>
        <div className="confirm-dialog-actions">
          <button
            onClick={handleConfirm}
            className="confirm-button confirm-button-confirm"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="confirm-button confirm-button-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
