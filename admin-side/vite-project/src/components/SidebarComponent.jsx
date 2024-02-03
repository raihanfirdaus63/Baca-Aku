// SidebarComponent.jsx
import React from "react";
import logo from "../assets/images/logo-baca-aku.png";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../store/action/actionType";

function SidebarComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: USER_LOGIN,
          payload: false
        });
        localStorage.clear();
        navigate('/login');
        Swal.fire(
          'Logouted!',
          `Successfully log out.`,
          'success'
        );
      }
    });
  }

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
                <div className="row align-items-center">
                  <div className="col-2">
                    <i className="fas fa-search icon-width"></i>
                  </div>
                  <div className="col font-size-18">Find Personality</div>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link active">
              <div className="container text-left">
                <div className="row align-items-center">
                  <div className="col-2">
                    <i className="fas fa-user-plus icon-width"></i>
                  </div>
                  <div className="col font-size-18">Register Admin</div>
                </div>
              </div>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/products" className="nav-link active">
              <div className="container text-left">
                <div className="row align-items-center">
                  <div className="col-2">
                    <i className="fas fa-box icon-width"></i>
                  </div>
                  <div className="col font-size-18">Products</div>
                </div>
              </div>
            </Link>
          </li> */}
          <li className="nav-item mt-3">
            <a className="nav-link active" href="#" onClick={doLogout}>
              <div className="container text-left">
                <div className="row align-items-center">
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
