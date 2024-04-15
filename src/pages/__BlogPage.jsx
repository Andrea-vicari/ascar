import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import pic from '../assets/images/profile-pic.jpg'

function BlogPage() {

	//let clicked = useLocation();

  	//let singleArt  = clicked.state

	//console.log(singleArt.clicked)

	return (
	<>
    <div className='container-fluid pt-5 mt-5 bg-network'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Blog</h1>
      </div>
    </div>
	<div className='container py-5'>
		<div className="row align-items-md-stretch">
		<div className="col-md-6">
			<div className="h-100 p-5 bg-body-tertiary border rounded-3">
			<img src={pic} className='img-fluid'/>
			<h2>Add borders</h2>
			<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
			<button className="btn btn-outline-secondary" type="button">Example button</button>
			</div>
		</div>
		<div className="col-md-6">
			<div className="h-100 p-5 bg-body-tertiary border rounded-3">
			<h2>Add borders</h2>
			<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
			<button className="btn btn-outline-secondary" type="button">Example button</button>
			</div>
		</div>
		<div className="col-md-6">
			<div className="h-100 p-5 bg-body-tertiary border rounded-3">
			<h2>Add borders</h2>
			<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
			<button className="btn btn-outline-secondary" type="button">Example button</button>
			</div>
		</div>
		<div className="col-md-6">
			<div className="h-100 p-5 bg-body-tertiary border rounded-3">
			<h2>Add borders</h2>
			<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
			<button className="btn btn-outline-secondary" type="button">Example button</button>
			</div>
		</div>
		</div>

	</div>

	</>
	)
}

export default BlogPage
