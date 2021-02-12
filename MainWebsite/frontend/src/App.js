import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Router from './components/Router';


function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Header/>
        
        <Router/>

        <Footer/>
      </BrowserRouter>
      



    </div>
  );
}

export default App;
