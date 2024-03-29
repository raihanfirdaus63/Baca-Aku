// SidebarComponent.jsx
import React from "react";
import logo from "../assets/images/logo-baca-aku.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../store/action/actionType";

function SidebarComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      customClass: {
        popup: "custom-popup-class",
        header: "custom-header-class",
        title: 'custom-title-class',
        text: 'custom-text-class',
        confirmButton: "custom-confirm-button-class"
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: USER_LOGIN,
          payload: false,
        });
        localStorage.clear();
        navigate("/login");
        Swal.fire({
          icon: 'success',
          title: 'Log Out!',
          text: 'You have been successfully logged out.',
          confirmButtonText: 'OK',
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
          background: '#2a2a2af',
          showCloseButton: false,
          timerProgressBar: true,
          timer: 3000,
          progressBarColor: '#ffffff',
          onOpen: (el) => {
            el.style.borderRadius = '10px';
          }
        });
      }
    });
  };

  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item mb-3 text-center">
            <Link to="/" className="nav-link active">
              <img src={logo} alt="" style={{ width: "100px" }} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              <div className="container text-left">
                <div className="row ">
                  <div className="col-2">
                    <i className="fas fa-search icon-width"></i>
                  </div>
                  <div className="col font-size-18">Find Personality</div>
                </div>
              </div>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/personalities" className="nav-link active">
              <div className="container text-left">
                <div className="row ">
                  <div className="col-2">
                    <i className="fas fa-users icon-width"></i>
                  </div>
                  <div className="col font-size-18">Personalities</div>
                </div>
              </div>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/register" className="nav-link active">
              <div className="container text-left">
                <div className="row ">
                  <div className="col-2">
                    <i className="fas fa-user-plus icon-width"></i>
                  </div>
                  <div className="col font-size-18">Register Admin</div>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <a className="nav-link active" href="#" onClick={doLogout}>
              <div className="container text-left">
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-sign-out-alt icon-width"></i>
                  </div>
                  <div className="col font-size-18">Logout</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SidebarComponent;
