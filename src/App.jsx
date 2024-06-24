import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import AppStore from './components/AppStore/AppStore.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Footer from './components/Footer/Footer.jsx';
import OrderPopup from './components/OrderPopup/OrderPopup.jsx';
import Books from './components/BooksSlider/Books.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="app-container">
      <Navbar handleOrderPopup={handleOrderPopup} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Services handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStore />
      <Books />
      <Testimonial />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      {/* 버튼들 */}
      <div className="floating-buttons">
        <button className="scroll-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
        <button className="scroll-button" onClick={scrollToBottom}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default App;
