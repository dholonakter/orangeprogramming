import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Header/>
        {/* <AboutUs/> */}
        <ContactUs/>
        <Footer/>
      </BrowserRouter>
      



    </div>
  );
}

export default App;
