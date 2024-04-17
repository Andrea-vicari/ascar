import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import newsList from '../assets/news/news.json';

function SinglePost() {

  // Click State logics
	var clicked = useLocation();
  let titleArt  = clicked.state
	console.log(titleArt.clicked)
  var whatClicked = titleArt.clicked;

  // Dark Ligth Logics
	const themeType = useSelector((state) => state.counter.value)
  let bgType;
  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"

  // Filter the JSON by The title
  var filterArticle = []

  newsList.forEach(function callback(value, index) {
    value.title == whatClicked ? filterArticle.push(value) : false
  });

  console.log(filterArticle)

	return (
	<>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>{titleArt.clicked}</h1>
      </div>
    </div>
    <article className="post single-post">
      <div className="container">

          <div className="row">

              <div className="col-sm-10 mx-auto col-sm-offset-1">

                <div className="carousel slide py-3">
                  <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://placehold.co/800x400" className="d-block w-100"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://placehold.co/800x400" className="d-block w-100"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://placehold.co/800x400" className="d-block w-100"/>
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

                  <div className="post-content">

                      <h2 className="text-center">{filterArticle[0].title}</h2>

                      <p>{filterArticle[0].description}</p>

                  </div>

                  <footer className="post-footer">

                      <div className="post-meta clearfix">

                          <p className="post-date">March 25, 2014</p>



                      </div>
                  </footer>

              </div>

          </div>

      </div>
    </article>

	</>
	)
}

export default SinglePost
