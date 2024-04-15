import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'

// Components CSS

import '../src/Components/styles/cta-small-style.css'
import '../src/Components/styles/portfolio-style.css'
import '../src/Components/styles/contact-style.css'
import '../src/Components/styles/footer-style.css'
import '../src/Components/styles/services-style.css'
import '../src/Components/styles/cta-style.css'
import '../src/Components/styles/features-style.css'
//import '../src/Components/styles/blog-style.css'
import '../src/Components/styles/banner-intro-style.css'
import '../src/Components/styles/divider-style.css'

// Main CSS Sass
import './sass/index.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>

  ,
)