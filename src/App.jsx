import React from 'react';
import { Routes, Route} from 'react-router-dom';

import NavbarFixedTop from './Components/Common/NavbarFixedTop';
import Footer from './Components/Common/Footer';
import ScrollToTop from './Components/ScrollToTop';
import HomepageOne from './pages/HomepageOne';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/Servicepage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {

  return (
    <React.Fragment>
      <NavbarFixedTop />
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<HomepageOne />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
        </ScrollToTop>
      <Footer />
    </React.Fragment>

  )
}

export default App