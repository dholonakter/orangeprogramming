import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Web from './pages/WebDevelopmentServices/WebDevelopment.page'
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.component";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about-us" component={Aboutus} />
            <Route exact path="/contact-us" component={Contactus} />
            
            <Route exact path="/web-deveopment" component={Web} />
            <Route exact path="/" component={Home} />
            {/* under construction page routing */}
            <Route exact path="/projects" component={UnderConstruction} />
            <Route exact path="/gallery" component={UnderConstruction} />
            <Route exact path="/android" component={UnderConstruction} />
            <Route exact path="/ai" component={UnderConstruction} />
            <Route exact path="/ios" component={UnderConstruction} />
            <Route exact path="/blockchain" component={UnderConstruction} />
            {/* Page Not Found Here */}
            <Route exact path="*" component={" "} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
