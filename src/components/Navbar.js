import React from 'react'
import LoginPage from './LoginPage';
import { Link } from "react-router-dom";

export default function Navbar() {

  const handleColse = (e)=>{
    // window.location.reload(false);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">College Eazy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/Notes">Notes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AttendancePage">AttendancePage</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Links</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
          </ul>

          <div className='modalCard'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage">
              Login
            </button>
            <div className="modal  login fade" id="LoginPage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="btn-close"  onClick={handleColse} data-bs-dismiss="modal" aria-label="Close"></button>
                  <LoginPage />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
