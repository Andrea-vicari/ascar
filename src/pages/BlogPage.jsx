import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux'
import pic from '../assets/images/profile-pic.jpg'

function BlogPage() {

	const themeType = useSelector((state) => state.counter.value)

	let bgType, textType, textColor;

	themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
	themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
	themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

	return (
	<>
    <div className='container-fluid pt-5 mt-5 bg-network'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Blog</h1>
      </div>
    </div>
	<div className={"container-fluid"+ " " + bgType + " " + textType}>

		<div className="container border border-1">

		<div className="row g-5 mt-1">
			<div className="col-md-5 col-lg-4 order-md-last border border-2">
			{/* Here Sidebar */}
			<div className="position-sticky" style={{marginTop:10}}>
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
				<h4 className="fst-italic">Archives</h4>
				<ol className="list-unstyled mb-0">
					<li><a href="#">March 2021</a></li>
					<li><a href="#">February 2021</a></li>
					<li><a href="#">January 2021</a></li>
					<li><a href="#">December 2020</a></li>
					<li><a href="#">November 2020</a></li>
					<li><a href="#">October 2020</a></li>
					<li><a href="#">September 2020</a></li>
					<li><a href="#">August 2020</a></li>
					<li><a href="#">July 2020</a></li>
					<li><a href="#">June 2020</a></li>
					<li><a href="#">May 2020</a></li>
					<li><a href="#">April 2020</a></li>
				</ol>
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
			<div className="col-md-7 col-lg-8 border border-2">

				<div className={"col-md-12 mb-3"+ " " + bgType + " " + textType}>
					<div className="h-100 p-5 border rounded-3">
					<h2>Add borders</h2>
					<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
					<button className="btn btn-outline-secondary" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-12 mb-3">
					<div className="h-100 p-5 border rounded-3">
					<h2>Add borders</h2>
					<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
					<button className="btn btn-outline-secondary" type="button">Example button</button>
					</div>
				</div>
				<div className="col-md-12 mb-3">
					<div className="h-100 p-5 bg-body-tertiary border rounded-3">
					<h2>Add borders</h2>
					<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
					<button className="btn btn-outline-secondary" type="button">Example button</button>
					</div>
				</div>



			</div>
		</div>
		</div>
	</div>





	</>
	)
}

export default BlogPage
