import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

function Footer() {

  // Scroll to top function
  useEffect(() => {
    const element = document.getElementById('myBtn');
    element.style.display = "block";
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className='container-fluid bg-primary py-4'>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center">
          <p className="col-md-4 mb-0 text-white">© 2024 Company, Inc</p>

          <Link className="navbar-brand d-flex" to={'/'}>
            <span className='text-black fs-1'>AS<span className='text-white'>C</span>AR</span>
            </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
          <button id="myBtn" onClick={topFunction} className='btn btn-sm btn-outline-secondary'>
            <i className='fa fa-arrow-up'></i>
          </button>
        </footer>
      </div>

    </div>
  )
}

export default Footer