import React, { useState, useEffect } from "react";
import "./StudentDialog.css";
import { editStudent } from "../apis/editStudent";
import { addStudent } from "../apis/createStudent";
import { toast } from "react-toastify";

const StudentDialog = ({ open, onClose, student, onSave, isEditMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    classGrade: "",
    phoneNumber: "",
    ...student,
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || typeof formData.name !== "string") {
      newErrors.name = "Name is required and must be a valid string.";
    }

    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Age is required and must be a valid positive number.";
    }

    if (!formData.classGrade || typeof formData.classGrade !== "string") {
      newErrors.classGrade = "Class is required and must be a valid string.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Phone number is required and must be a valid 10-digit number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (student && open && isEditMode) {
      setFormData({ ...student });
    }
  }, [student, open, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (isEditMode) {
      try {
        await editStudent(formData.id, formData);
        toast.success("Student updated successfully!");
        onSave();
      } catch (error) {
        toast.error("Failed to update student.");
      }
    } else {
      try {
        await addStudent(formData);
        toast.success("Student added successfully!");
        onSave();
      } catch (error) {
        toast.error("Failed to add student.");
      }
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <h2 className="dialog-title">
          {isEditMode ? "Edit Student" : "Add Student"}
        </h2>
        <form className="dialog-form">
          <label className="dialog-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="dialog-input"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>
          <label className="dialog-label">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age || ""}
              onChange={handleChange}
              className="dialog-input"
            />
            {errors.age && <div className="error">{errors.age}</div>}
          </label>
          <label className="dialog-label">
            Class:
            <input
              type="text"
              name="classGrade"
              value={formData.classGrade || ""}
              onChange={handleChange}
              className="dialog-input"
            />
            {errors.classGrade && (
              <div className="error">{errors.classGrade}</div>
            )}
          </label>
          <label className="dialog-label">
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              className="dialog-input"
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </label>
          <div className="dialog-actions">
            <button
              type="button"
              className="dialog-button dialog-button-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="dialog-button dialog-button-save"
              onClick={handleSubmit}
            >
              {isEditMode ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentDialog;
