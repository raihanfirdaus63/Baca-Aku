import React from "react";
import Card from "react-bootstrap/Card";
import login from "../assets/images/login.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerAdmin } from "../store/action/user";
import Swal from "sweetalert2";

function RegisterComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
  });
  const inputRegister = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...formRegister,
      [name]: value,
    };
    setFormRegister(newInput);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const result = await dispatch(registerAdmin(formRegister));
      if (result.msg === `${formRegister.email} successfully created`) {
        Swal.fire({
          icon: "success",
          title: "Registered!",
          text: `${formRegister.email} Successfully registered.`,
        }).then(() => {
          navigate("/register");
        });
      } else {
        throw new Error(`${result.msg}`);
      }
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
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
          boxShadow: "5px 5px 10px #101010, -5px -5px 10px #323232",
        }}
      >
        <Card.Img
          variant="top"
          src={login}
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
          <Card.Title className="text-center">Register for other Admin</Card.Title>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="fullname">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formRegister.email}
                onChange={inputRegister}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={formRegister.password}
                onChange={inputRegister}
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

export default RegisterComponent;
