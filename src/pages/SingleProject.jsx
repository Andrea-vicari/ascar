import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import CallToActionSmall from "../Components/CallToActionSmall"
import { useSelector } from 'react-redux'

function SingleProject() {

	var clicked = useLocation();

  	let titleArt  = clicked.state

	console.log(titleArt.clicked)

	const themeType = useSelector((state) => state.counter.value)

    let bgType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"

	return (
	<>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>{titleArt.clicked}</h1>
      </div>
    </div>
	<section id="portfolio-details" className={"portfolio-details py-5"+ " " + bgType}>
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://placehold.co/600x400" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                  <img src="https://placehold.co/600x400" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                  <img src="https://placehold.co/600x400" className="d-block w-100"/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
			  <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
	<CallToActionSmall />
	</>
	)
}

export default SingleProject
