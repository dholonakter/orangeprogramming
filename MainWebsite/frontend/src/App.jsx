import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about-us" component={Aboutus} />
            <Route exact path="/contact-us" component={Contactus} />
            <Route exact path="/" component={Home} />
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
