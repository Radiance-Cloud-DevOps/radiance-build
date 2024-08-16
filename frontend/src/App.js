
import './App.css';
import Navigation from './pages/Navigation/Navigation';
import Home from './pages/HomePage/HomePage';
import IntroductionPage from './pages/IntroductionPage/IntroductionPage';
import ObjectivePage from './pages/ObjectivePage/ObjectivePage';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './pages/FooterPage/FooterPage';
import {Element} from 'react-scroll';

function App() {
  return (
    <div>
            <Navigation />
            <Element name="home">
                <Home />
            </Element>
            <Element name="news">
                <IntroductionPage/>
            </Element>
            <Element name="about">
                <ObjectivePage/>
            </Element>
            <Element name="contact">
                <ContactUs/>
            </Element>
            <Footer/>
    </div>
  );
}

export default App;
