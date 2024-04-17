import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import newsList from '../../src/assets/news/news.json';

function BlogPage() {

	const themeType = useSelector((state) => state.counter.value)

	let bgType, textType, textColor;

	themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
	themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
	themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

	// Declare a fixed length excerpt
	var fixedLengthExcerpt;
	// Function shorter() to short down a long description and generate an excerpt
	// the length can be set by editing "arrayPh.length = x"
	const shorter = (phrase) => {
		let arrayPh = phrase.split(' ');
		arrayPh.length = 12;
		fixedLengthExcerpt = arrayPh.join(' ');
		return fixedLengthExcerpt
	}

	// Run shorter() and add an excerpt to each object of local newsList json
	for (let i = 0; i < newsList.length; i++) {
		shorter(newsList[i].description)
		newsList[i].fixedLengthExcerpt = fixedLengthExcerpt
	}

	return (
		<>
			<div className='container-fluid pt-5 mt-5 bg-network'>
				<div className='container text-center mt-5 pb-5'>
					<h1 className='display-2 text-white text-uppercase'>Blog</h1>
				</div>
			</div>
			<div className={"container-fluid" + " " + bgType + " " + textType}>
				<div className="container">

					<div className="row g-5">
						{/* Here Sidebar */}
						<div className="col-md-5 col-lg-4 order-md-last">
							<div className="position-sticky" style={{ marginTop: 48 }}>
								<div className="p-4 mb-3 bg-body-tertiary rounded">
									<h4 className="fst-italic">About</h4>
									<p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
								</div>

								<div>
									<h4 className="fst-italic">Recent posts</h4>
									<ul className="list-unstyled">
										<li>
											<a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
												<svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
												<div className="col-lg-8">
													<h6 className="mb-0">Example blog post title</h6>
													<small className="text-body-secondary">January 15, 2024</small>
												</div>
											</a>
										</li>
										<li>
											<a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
												<svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
												<div className="col-lg-8">
													<h6 className="mb-0">This is another blog post title</h6>
													<small className="text-body-secondary">January 14, 2024</small>
												</div>
											</a>
										</li>
										<li>
											<a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
												<svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
												<div className="col-lg-8">
													<h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
													<small className="text-body-secondary">January 13, 2024</small>
												</div>
											</a>
										</li>
									</ul>
								</div>


								<div className="p-4">
									<h4 className="fst-italic">Elsewhere</h4>
									<ol className="list-unstyled">
										<li><a href="#">GitHub</a></li>
										<li><a href="#">Twitter</a></li>
										<li><a href="#">Facebook</a></li>
									</ol>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-lg-8">
							{newsList.map((e) => {
								return (
									<div className="col-md-12 pt-5" key={e.title}>
										<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
											<div className="col p-4 d-flex flex-column position-static">
												<strong className="d-inline-block mb-2 text-primary-emphasis">{e.category}</strong>
												<h3 className="mb-0">{e.title}</h3>

												<p className="card-text mb-auto">{e.fixedLengthExcerpt}</p>
												<Link to={`/singlepost?${e.title}`} state={{ clicked: e.title }} className="icon-link gap-1 icon-link-hover stretched-link">
													Continue reading
													<i className='bi bi-arrow-right'></i>
												</Link>
											</div>
											<div className="col-auto d-none d-lg-block">
												<img src={e.thumbImage} className='bd-placeholder-img' style={{ width: 250, height: 250 }} />
											</div>
										</div>
									</div>
								)
							})}

						</div>
					</div>
				</div>
			</div>





		</>
	)
}

export default BlogPage
