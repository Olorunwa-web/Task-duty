import React from 'react';
import '../Styles/navbar.css'
import {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navLogo from '../assets/Group 1.png';
import navImage from '../assets/Ellipse 1.png'
import menuimg from '../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <nav className="container d-flex justify-content-between py-2">
         <div className="d-flex align-items-center justify-content-center gap-2">
          <li className = 'list-unstyled'>
            {" "}
            <Link to="/">
              <img src={navLogo} className = 'img-fluid' alt="nav-logo" />
            </Link>{" "}
          </li>
          <h2>TaskDuty</h2>
         </div>
         <ul className="d-flex d-none list-unstyled d-lg-flex  gap-5 align-items-center">
          <li>
            {" "}
            <Link to="/newtask" className = 'duty'> New Task </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/alltask" className = 'duty'> All Tasks </Link>{" "}
          </li>
          <img src={navImage} alt="" />
         </ul>
         
         

         {/* off canvas */}
         <div className = 'd-md-block d-lg-none'>
         <div className = 'd-lg-none' onClick = {handleShow}>
                <img  className = 'menu-img' src= {menuimg} alt="menu-img"/>
            </div>
      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mobile Nav</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className = 'd-flex flex-column-reverse list-unstyled gap-5 mobile-nav'>
        <li>
            {" "}
            <Link to="/newtask" className =  'duty'> New Task </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/alltask" className = 'duty'> All Tasks </Link>{" "}
          </li>
          <img src={navImage} alt="" className =  'per-img' />
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
        </nav>
        <hr/>
  
        </>
    )
}

export default Navbar

