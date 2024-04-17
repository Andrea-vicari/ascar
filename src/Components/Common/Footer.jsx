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
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/aboutus" className="nav-link px-2 text-white">About</Link></li>
            <li className="nav-item"><Link to="/faqpage" className="nav-link px-2 text-white">FAQs</Link></li>
            <li className="nav-item"><Link to="/privacy" className="nav-link px-2 text-white">Privacy</Link></li>
          </ul>
          <button id="myBtn" onClick={topFunction} className='btn btn-sm btn-outline-secondary'>
            <i className="bi bi-arrow-bar-up"></i>
          </button>
        </footer>
      </div>

    </div>
  )
}

export default Footer