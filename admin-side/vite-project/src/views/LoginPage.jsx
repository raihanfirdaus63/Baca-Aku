import React from "react";
import Card from "react-bootstrap/Card";
import login from "../assets/images/login.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import { USER_LOGIN } from "../store/action/actionType";
import { loginAdmin } from "../store/action/user";



function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const inputLogin = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...formLogin,
      [name]: value,
    };
    setFormLogin(newInput);
  };
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
  
      const result = await dispatch(loginAdmin(formLogin));
  
      // Pastikan bahwa result adalah objek yang memiliki properti access_token
      if (result && result.access_token) {
        localStorage.setItem('access_token', result.access_token);
        dispatch({
          type: USER_LOGIN,
          payload: true,
        });
        Swal.fire({
          icon: 'success',
          title: 'Successfully Login',
          customClass: {
            popup: 'custom-popup-class',
            header: 'custom-header-class',
            icon: 'custom-icon-class',
            title: 'custom-title-class',
            confirmButton: 'custom-confirm-button-class',
          },
          confirmButtonColor: '#ff4500', 
          timer: 3000, // Waktu penutupan dalam milidetik (contoh: 3000 ms atau 3 detik)
          showConfirmButton: false, // Menghilangkan tombol konfirmasi jika diinginkan
          // Menyesuaikan warna progress bar
          timerProgressBar: true,
          progressBarColor: '#ffffff', // Ganti dengan warna putih atau warna yang diinginkan
        });
  
        // Navigasi ke halaman utama setelah beberapa saat
        setTimeout(() => {
          navigate('/');
        }, 3000); // Sesuaikan waktu dengan timer SweetAlert
      } else {
        throw new Error('Invalid response from server');
      }
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
    <section
      className="d-flex justify-content-center align-items-center "
      style={{
        background: "rgb(36,35,35)",
        background:
          "linear-gradient(90deg, rgba(36,35,35,1) 0%, rgba(52,52,52,1) 20%, rgba(101,99,99,1) 50%, rgba(52,52,52,1) 80%, rgba(36,35,35,1) 100%)",
        height: "100vh",
      }}
    >
      <Card
        className="mt-3"
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
          <Card.Title className="text-center">
            Log in into your account
          </Card.Title>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                value={formLogin.email}
                onChange={inputLogin}
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter yout email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                name="password"
                value={formLogin.password}
                onChange={inputLogin}
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Enter yout password"
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

export default LoginPage;
