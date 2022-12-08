import React from 'react'
import LoginPage from './LoginPage';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { GiNotebook} from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { MdSell } from "react-icons/md";  

export default function Navbar2() {

  const handleColse = (e)=>{
    //window.location.reload(false);
  }


  return (
    <IconContext.Provider value={{ size: "1.5em"}}>

    <nav className="navbar navbar-expand-lg navbar-dark ">
      
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">College Eazy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{cursor:"pointer"}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/Notes"><GiNotebook/> Notes   </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AttendancePage"><SiGooglesheets/> Attendance</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><MdSell/> Sell & Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><BsFillQuestionCircleFill/> About</a>
            </li>
          </ul>

          <div className='modalCard' >
            <div className="login" style={{backgroundColor:"#0d6efd"}}>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage" style={{ marginRight:"1px", paddingRight:"3px"}}>
              Login
            </button>
            /
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage" style={{ marginRight:"0px",paddingLeft:"3px" }}>
              Registration
            </button>
              </div>
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
    </IconContext.Provider>

  )
}
