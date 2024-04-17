import React from 'react'
import DarkSelector from '../Common/SwitchDark'
import SocialMenu from '../Common/SocialMenu';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


function NavbarFixedTop() {
      // Dark theme logics
  const count = useSelector((state) => state.counter.value)
  return (
    <>
        <div className='container'>
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme={count}>
        <div className="container">
            <Link className="navbar-brand d-flex" to={'/'}>
            <span className='fs-1'>AS<span className='text-primary'>C</span>AR</span>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to={'/aboutus'}>About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to={'/services'}>Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to={'/portfoliopage'}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to={'/blogpage'}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to={'/contact'}>Contact</Link>
              </li>

            </ul>
          <DarkSelector />
          <SocialMenu />
            </div>
        </div>
        </nav>
        </div>
    </>
  )
}

export default NavbarFixedTop