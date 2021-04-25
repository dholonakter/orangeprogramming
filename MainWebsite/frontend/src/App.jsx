import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.component";
import WebServices from "./pages/WebDevelopmentServices/WebDevelopment.page";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar name={document.getElementById("tarek")} />

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={Aboutus} />
            <Route exact path="/contact-us" component={Contactus} />
            <Route exact path="/" component={Home} />
            <Route exact path="/web-development" component={WebServices} />
            <Route
              exact
              path="/under-construction"
              component={UnderConstruction}
            />

            {/* under construction page routing */}
            <Route exact path="/projects" component={UnderConstruction} />
            <Route exact path="/gallery" component={UnderConstruction} />
            <Route exact path="/android" component={UnderConstruction} />
            <Route exact path="/ai" component={UnderConstruction} />
            <Route
              exact
              path="/mobile-developments"
              component={UnderConstruction}
            />
            <Route exact path="/blockchain" component={UnderConstruction} />
            <Route
              exact
              path="/windows-application"
              component={UnderConstruction}
            />

            <Route exact strict path="/home/#tarek" component={Home} />
            <Route exact path="/blog" component={UnderConstruction} />

            {/* Page Not Found Here */}
            <Route component={Error} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
