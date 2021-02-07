import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Header/>
        <AboutUs/>
        <Footer/>
      </BrowserRouter>
      



    </div>
  );
}

export default App;
