import React from "react";
import personality from "../assets/images/cover.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataPersonality } from "../store/action/personality";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";

function PersonalityComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    fullname: "",
    birthDay: "",
  });

  const inputDataPersonality = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...dataForm,
      [name]: value,
    };
    setDataForm(newInput);
  };

  const handleFindPersonality = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(fetchDataPersonality(dataForm));
      Swal.fire({
        icon: 'success',
        title: 'Success Fetch Data',
        confirmButtonColor: '#ff4500',
        background: '#2a2a2af',
        customClass: {
          popup: 'custom-popup-class',
          header: 'custom-header-class',
          title: 'custom-title-class',
          closeButton: 'custom-close-button-class',
          icon: 'custom-icon-class',
          content: 'custom-content-class',
          actions: 'custom-actions-class',
          confirmButton: 'custom-confirm-button-class',
          cancelButton: 'custom-cancel-button-class',
          footer: 'custom-footer-class'
        },
        showCloseButton: false,
        timerProgressBar: true,
        timer: 3000,
        onOpen: (el) => {
          el.style.borderRadius = '10px';
        }
      });
      
      navigate('/personality');
    } catch (error) {
      let errorMessage = 'Something went wrong!';
      if (error.msg) {
        errorMessage = error.msg;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      });
    }
  };
  
  return (
    <section className="d-flex justify-content-center align-items-center">
      <Card
        style={{
          width: "30rem",
          borderRadius: "20px",
          background: "#212121",
          boxShadow: "5px 5px 10px #10100f, -5px -5px 10px #3a3a37",
        }}
      >
        <Card.Img
          variant="top"
          src={personality}
          style={{
            borderRadius: "20px",
            height: "400px",
          }}
        />
        <Card.Body
          style={{
            color: "white",
          }}
        >
          <Card.Title className="text-center">Please Input Data to Find Personality</Card.Title>
          <form onSubmit={handleFindPersonality}>
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter your fullname"
                name="fullname"
                value={dataForm.fullname}
                onChange={inputDataPersonality}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputDate1" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="inputDate"
                name="birthDay"
                value={dataForm.birthDay}
                onChange={inputDataPersonality}
              />
            </div>
            <button type="submit" className="button-custom-2 btn-block">
              Submit
            </button>
          </form>
        </Card.Body>
      </Card>
    </section>
  );
}

export default PersonalityComponent;

