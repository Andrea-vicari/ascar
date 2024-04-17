import React from 'react'
import PortfolioLink from '../Components/PortfolioLink';


function PortfolioPage() {
  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Portfolio</h1>
      </div>
    </div>
    <PortfolioLink />
    </>
  )
}

export default PortfolioPage