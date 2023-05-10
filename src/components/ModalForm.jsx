import React, { useState } from "react";
import classes from "./ModalForm.module.css";

const ModalForm = ({ movie, show, set }) => {
  const [formData, setFormData] = useState({
    name: movie.show.name,
    language: movie.show.language,
    date: movie.show.premiered,
  });

  const toggleModal = () => {
    set(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    const existingData = JSON.parse(localStorage.getItem("formData")) ?? [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("formData", JSON.stringify([...updatedData]));
    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Close the modal
    toggleModal();
  };

  return (
    <div>
      {show && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <span className={classes.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
              <div className={classes.formGroup}>
                <div>
                  <label>Name:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={movie.show.name}
                    className="form-control"
                  />
                </div>
              </div>
              <div className={classes.formGroup}>
                <div>
                  <label>Language:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="language"
                    value={movie.show.language}
                    className="form-control"
                  />
                </div>
              </div>
              <div className={classes.formGroup}>
                <div>
                  <label>Date:</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="date"
                    value={movie.show.premiered}
                    className="form-control"
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
