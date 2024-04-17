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
import PortfolioPage from './pages/Portfoliopage';
import PrivacyPage from './pages/PrivacyPage';
import FaqPage from './pages/FaqPage';
import SinglePost from './pages/SinglePost';
import SingleProject from './pages/SingleProject';

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
            <Route path="/faqpage" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/portfoliopage" element={<PortfolioPage />} />
            <Route path="/singlepost" element={<SinglePost />} />
            <Route path="/singleproject" element={<SingleProject />} />
        </Routes>
        </ScrollToTop>
      <Footer />
    </React.Fragment>

  )
}

export default App